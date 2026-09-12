import {
  SiAxios,
  SiChatwoot,
  SiCss,
  SiFigma,
  SiGit,
  SiGithub,
  SiGmail,
  SiGooglesheets,
  SiHtml5,
  SiJavascript,
  SiJson,
  SiMake,
  SiMongodb,
  SiN8N,
  SiNpm,
  SiReact,
  SiTelegram,
  SiWhatsapp,
  SiYarn,
} from 'react-icons/si'
import {
  LuBrainCircuit,
  LuBot,
  LuCode,
  LuNetwork,
  LuPackage,
  LuTable2,
  LuWebhook,
  LuWorkflow,
} from 'react-icons/lu'

const iconMap = {
  'ai-assisted software development': LuBot,
  'ai operations analyst': LuBrainCircuit,
  'ai product designer': LuWorkflow,
  'analista de ia': LuBot,
  'analista de ia / ai analyst': LuBrainCircuit,
  'analista de automacao com ia': LuWorkflow,
  antigravity: LuWorkflow,
  'apis rest': LuNetwork,
  automacao: LuWorkflow,
  automação: LuWorkflow,
  'automation developer': LuWorkflow,
  axios: SiAxios,
  bubble: LuPackage,
  'bubble (familiaridade)': LuPackage,
  chatwoot: SiChatwoot,
  'chatwoot + ia': SiChatwoot,
  codex: LuBot,
  'conversational designer': LuBot,
  css: SiCss,
  css3: SiCss,
  'data table': LuTable2,
  'data table + mongodb': SiMongodb,
  desenvolvimento: LuCode,
  'desenvolvedor de chatbots': LuBot,
  'especialista em automacao no-code / low-code': LuWorkflow,
  figma: SiFigma,
  'figma (familiaridade)': SiFigma,
  'filtros/regras': LuWorkflow,
  git: SiGit,
  github: SiGithub,
  gmail: SiGmail,
  'google sheets': SiGooglesheets,
  html: SiHtml5,
  html5: SiHtml5,
  'ia generativa': LuBot,
  javascript: SiJavascript,
  json: SiJson,
  logica: LuBrainCircuit,
  make: SiMake,
  matrizes: LuTable2,
  mongodb: SiMongodb,
  n8n: SiN8N,
  'no-code / low-code developer': LuWorkflow,
  npm: SiNpm,
  openai: LuBrainCircuit,
  'product builder': LuPackage,
  react: SiReact,
  'rpa developer': LuWorkflow,
  'telegram bot': SiTelegram,
  'text parser': LuCode,
  'vs code': LuCode,
  webhooks: LuWebhook,
  whatsapp: SiWhatsapp,
  'whatsapp + webhooks': SiWhatsapp,
  yarn: SiYarn,
}

const iconColors = {
  axios: '#5a29e4',
  chatwoot: '#1f93ff',
  'chatwoot + ia': '#1f93ff',
  css: '#1572b6',
  css3: '#1572b6',
  figma: '#f24e1e',
  'figma (familiaridade)': '#f24e1e',
  git: '#f05032',
  github: '#f4f0ea',
  gmail: '#ea4335',
  'google sheets': '#0f9d58',
  html: '#e34f26',
  html5: '#e34f26',
  javascript: '#f7df1e',
  make: '#8b5cf6',
  mongodb: '#47a248',
  n8n: '#ff6d5a',
  react: '#61dafb',
  'telegram bot': '#26a5e4',
  whatsapp: '#25d366',
  'whatsapp + webhooks': '#25d366',
  yarn: '#2c8ebb',
  'evolution api': '#00ffa7',
}

const imageIconMap = {
  'evolution api': '/icons/evolution-api.png',
}

function normalizeTechName(name) {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

function TechIcon({ name, className = 'tech-icon' }) {
  const normalizedName = normalizeTechName(name)
  const imageSrc = imageIconMap[normalizedName]
  const color = iconColors[normalizedName]
  const style = color ? { '--tech-color': color } : undefined

  if (imageSrc) {
    return (
      <img
        className={className}
        src={imageSrc}
        alt=""
        aria-hidden="true"
        decoding="async"
        loading="lazy"
        style={style}
      />
    )
  }

  const Icon = iconMap[normalizedName] || LuCode

  return (
    <Icon
      className={className}
      style={style}
      aria-hidden="true"
      focusable="false"
    />
  )
}

export default TechIcon
