import { FiArrowRight, FiGithub, FiLinkedin } from 'react-icons/fi'
import TechTag from './TechTag.jsx'

const heroTechs = ['JavaScript', 'n8n', 'APIs REST', 'Make', 'HTML', 'CSS']

const githubUrl = 'https://github.com/MarcosV73'
const linkedinUrl =
  'http://www.linkedin.com/in/marcos-vin%C3%ADcius-damasceno-gon%C3%A7alves-148987391'

function Hero() {
  return (
    <section
      className="hero-section"
      id="inicio"
      aria-labelledby="hero-title"
      data-reveal
    >
      <div className="section-shell hero-layout">
        <div className="hero-copy">
          <p className="eyebrow hero-stagger">Eae, eu sou</p>
          <h1 className="hero-stagger" id="hero-title">
            <span className="name-line" data-text="Marcos">
              Marcos
            </span>
            <span className="name-line" data-text="Vinícius">
              Vinícius
            </span>
          </h1>
          <p className="hero-role hero-stagger">Desenvolvedor • Automação • IA</p>
          <p className="hero-description hero-stagger">
            Estudante de Sistemas de Informação, estagiário em desenvolvimento de
            software, criando experiências digitais e automações conectadas, futuro
            Analista de IA.
          </p>

          <div className="tech-strip hero-stagger" aria-label="Tecnologias principais">
            {heroTechs.map((tech) => (
              <TechTag
                className="tech-pill"
                key={tech}
                name={tech}
                variant="hero"
              />
            ))}
          </div>

          <div className="hero-actions hero-stagger">
            <a
              className="button"
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub aria-hidden="true" focusable="false" />
              GitHub
            </a>
            <a
              className="button button--ghost"
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin aria-hidden="true" focusable="false" />
              LinkedIn
            </a>
            <a className="button button--secondary" href="/#projetos">
              <FiArrowRight aria-hidden="true" focusable="false" />
              Ver projetos
            </a>
          </div>
        </div>

        <div className="hero-visual hero-stagger" aria-hidden="true">
          <figure className="hero-polaroid">
            <img src="/assets/dvd-video-polaroid.jpg" alt="" loading="eager" />
            <figcaption className="hero-polaroid__caption">S.I</figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}

export default Hero
