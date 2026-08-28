const heroTechs = [
  'React',
  'JavaScript',
  'n8n',
  'APIs REST',
  'Git',
  'GitHub',
  'AI-Assisted Software Development',
]

const githubUrl = 'https://github.com/MarcosV73'
const linkedinUrl =
  'http://www.linkedin.com/in/marcos-vin%C3%ADcius-damasceno-gon%C3%A7alves-148987391'

function Hero() {
  return (
    <section className="hero-section" id="inicio" aria-labelledby="hero-title">
      <div className="section-shell hero-layout">
        <div className="hero-copy">
          <p className="eyebrow">Portfólio pessoal</p>
          <h1 id="hero-title">Marcos Vinícius Damasceno Gonçalves</h1>
          <p className="hero-role">Estagiário de Desenvolvimento de Software</p>
          <p className="hero-description">
            Estudante de Sistemas de Informação com experiência prática em
            desenvolvimento web, automação de processos, APIs e Inteligência
            Artificial aplicada ao desenvolvimento de software.
          </p>

          <div className="tech-strip" aria-label="Tecnologias principais">
            {heroTechs.map((tech) => (
              <span className="tech-pill" key={tech}>
                {tech}
              </span>
            ))}
          </div>

          <div className="hero-actions">
            <a className="button" href="#projetos">
              Ver projetos
            </a>
            <a
              className="button button--secondary"
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="button button--ghost"
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="visual-board">
            <span className="visual-leaf visual-leaf--one"></span>
            <span className="visual-leaf visual-leaf--two"></span>
            <span className="visual-line visual-line--one"></span>
            <span className="visual-line visual-line--two"></span>

            <div className="workflow-card workflow-card--input">
              <span>WhatsApp</span>
              <strong>Webhook</strong>
            </div>
            <div className="workflow-card workflow-card--main">
              <span>n8n</span>
              <strong>Automação</strong>
            </div>
            <div className="workflow-card workflow-card--api">
              <span>REST</span>
              <strong>APIs</strong>
            </div>
            <div className="workflow-card workflow-card--ai">
              <span>Contexto</span>
              <strong>IA</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
