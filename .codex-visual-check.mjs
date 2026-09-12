import fs from 'node:fs'

const chromePort = 9222
const appUrl = 'http://127.0.0.1:5173/'
const outputDir = '.codex-screens'

const viewports = [
  { name: 'desktop-1440', width: 1440, height: 920 },
  { name: 'desktop-1024', width: 1024, height: 780 },
  { name: 'tablet-768', width: 768, height: 820 },
  { name: 'mobile-390', width: 390, height: 840 },
  { name: 'mobile-360', width: 360, height: 780 },
]

async function getDebuggerUrl() {
  let response = await fetch(`http://127.0.0.1:${chromePort}/json/new?about:blank`, {
    method: 'PUT',
  })
  if (!response.ok) {
    response = await fetch(`http://127.0.0.1:${chromePort}/json/new?about:blank`)
  }
  const data = await response.json()
  return data.webSocketDebuggerUrl
}

function createClient(url) {
  const ws = new WebSocket(url)
  let id = 0
  const callbacks = new Map()
  const events = []

  ws.addEventListener('message', (event) => {
    const message = JSON.parse(event.data)
    if (message.id && callbacks.has(message.id)) {
      callbacks.get(message.id)(message)
      callbacks.delete(message.id)
      return
    }
    if (message.method) {
      events.push(message)
    }
  })

  const opened = new Promise((resolve, reject) => {
    ws.addEventListener('open', resolve, { once: true })
    ws.addEventListener('error', reject, { once: true })
  })

  async function send(method, params = {}) {
    await opened
    const messageId = ++id
    ws.send(JSON.stringify({ id: messageId, method, params }))
    const response = await new Promise((resolve) => callbacks.set(messageId, resolve))
    if (response.error) {
      throw new Error(`${method}: ${response.error.message}`)
    }
    return response.result
  }

  return { events, send, ws }
}

async function wait(ms) {
  await new Promise((resolve) => setTimeout(resolve, ms))
}

async function evaluate(client, expression) {
  const result = await client.send('Runtime.evaluate', {
    expression,
    awaitPromise: true,
    returnByValue: true,
  })
  return result.result.value
}

async function screenshot(client, fileName) {
  const result = await client.send('Page.captureScreenshot', {
    captureBeyondViewport: false,
    format: 'png',
    fromSurface: true,
  })
  fs.writeFileSync(`${outputDir}/${fileName}`, Buffer.from(result.data, 'base64'))
}

fs.mkdirSync(outputDir, { recursive: true })

const client = createClient(await getDebuggerUrl())
await client.send('Page.enable')
await client.send('Runtime.enable')
await client.send('Log.enable')

const consoleIssues = []
client.events.push = new Proxy(client.events.push, {
  apply(target, thisArg, args) {
    const event = args[0]
    if (
      event?.method === 'Runtime.exceptionThrown' ||
      event?.method === 'Log.entryAdded' ||
      event?.method === 'Runtime.consoleAPICalled'
    ) {
      const level = event.params?.entry?.level || event.params?.type
      if (['error', 'warning'].includes(level) || event.method === 'Runtime.exceptionThrown') {
        consoleIssues.push(event)
      }
    }
    return Reflect.apply(target, thisArg, args)
  },
})

const reports = []

for (const viewport of viewports) {
  await client.send('Emulation.setDeviceMetricsOverride', {
    width: viewport.width,
    height: viewport.height,
    deviceScaleFactor: 1,
    mobile: viewport.width <= 480,
  })

  await client.send('Page.navigate', { url: appUrl })
  await wait(1600)
  await screenshot(client, `${viewport.name}-hero.png`)

  await evaluate(
    client,
    `document.getElementById('chatbot-n8n')?.scrollIntoView({ block: 'start' })`,
  )
  await wait(900)
  await screenshot(client, `${viewport.name}-chatbot.png`)

  const topReport = await evaluate(
    client,
    `(() => {
      const html = document.documentElement
      const sideNav = document.querySelector('.section-nav')
      const overflow = []
      document.querySelectorAll('body *').forEach((element) => {
        const style = getComputedStyle(element)
        const rect = element.getBoundingClientRect()
        if (
          rect.width > 0 &&
          rect.height > 0 &&
          style.visibility !== 'hidden' &&
          style.display !== 'none' &&
          element.scrollWidth > element.clientWidth + 2
        ) {
          overflow.push({
            tag: element.tagName.toLowerCase(),
            className: String(element.className || '').slice(0, 80),
            scrollWidth: element.scrollWidth,
            clientWidth: element.clientWidth,
          })
        }
      })
      return {
        viewport: '${viewport.name}',
        pageOverflow: html.scrollWidth > html.clientWidth + 1,
        htmlScrollWidth: html.scrollWidth,
        htmlClientWidth: html.clientWidth,
        sideNavDisplay: sideNav ? getComputedStyle(sideNav).display : 'missing',
        visibleOverflowCount: overflow.length,
        visibleOverflow: overflow.slice(0, 8),
      }
    })()`,
  )

  await evaluate(
    client,
    `document.getElementById('workflow')?.scrollIntoView({ block: 'start' })`,
  )
  await wait(900)
  await screenshot(client, `${viewport.name}-workflow.png`)

  const workflowReport = await evaluate(
    client,
    `(() => {
      const shell = document.querySelector('.workflow-shell')
      const firstNode = document.querySelector('.workflow-node')
      const inspector = document.querySelector('.workflow-inspector')
      const shellRect = shell?.getBoundingClientRect()
      const nodeRect = firstNode?.getBoundingClientRect()
      const inspectorRect = inspector?.getBoundingClientRect()
      return {
        workflowShell: shellRect ? {
          width: Math.round(shellRect.width),
          height: Math.round(shellRect.height),
          top: Math.round(shellRect.top),
          bottom: Math.round(shellRect.bottom),
        } : null,
        firstNode: nodeRect ? {
          width: Math.round(nodeRect.width),
          height: Math.round(nodeRect.height),
        } : null,
        inspector: inspectorRect ? {
          width: Math.round(inspectorRect.width),
          height: Math.round(inspectorRect.height),
        } : null,
      }
    })()`,
  )

  reports.push({ ...topReport, ...workflowReport })
}

console.log(
  JSON.stringify(
    {
      reports,
      consoleIssueCount: consoleIssues.length,
      consoleIssues: consoleIssues.map((event) => ({
        method: event.method,
        level: event.params?.entry?.level || event.params?.type,
        text:
          event.params?.entry?.text ||
          event.params?.args?.map((arg) => arg.value || arg.description).join(' ') ||
          event.params?.exceptionDetails?.text,
      })),
    },
    null,
    2,
  ),
)

await client.send('Browser.close')
