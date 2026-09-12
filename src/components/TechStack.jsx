import TechTag from './TechTag.jsx'

const defaultStack = [
  'JavaScript',
  'React',
  'HTML',
  'CSS',
  'n8n',
  'Make',
  'APIs REST',
  'Webhooks',
  'Axios',
  'Git',
  'GitHub',
  'Yarn',
  { name: 'Figma', note: 'Familiaridade' },
]

function TechStack({
  title = 'Stack principal',
  description = 'Tecnologias que uso com mais frequência em web, integrações e automação.',
  items = defaultStack,
}) {
  return (
    <section
      className="main-stack-section"
      id="stack"
      aria-labelledby="main-stack-title"
      data-reveal
    >
      <div className="section-shell main-stack-layout">
        <div className="main-stack-copy">
          <p className="eyebrow">Tecnologias</p>
          <h2 id="main-stack-title">{title}</h2>
          <p>{description}</p>
        </div>

        <div className="main-stack-list" aria-label={title}>
          {items.map((item) => {
            const name = typeof item === 'string' ? item : item.name
            const note = typeof item === 'string' ? null : item.note

            return (
              <TechTag
                className="tech-pill main-stack-pill"
                key={name}
                name={name}
                note={note}
                variant="stack"
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TechStack
