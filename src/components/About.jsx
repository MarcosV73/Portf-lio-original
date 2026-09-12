import { LuBriefcase, LuGraduationCap, LuWorkflow } from 'react-icons/lu'

const facts = [
  {
    label: 'Formação',
    value: 'Sistemas de Informação na UNI7, 2º semestre',
    Icon: LuGraduationCap,
  },
  {
    label: 'Experiência atual',
    value: 'Estágio em desenvolvimento de software',
    Icon: LuBriefcase,
  },
  {
    label: 'Prática recente',
    value: 'React, JavaScript, APIs REST, n8n e automações',
    Icon: LuWorkflow,
  },
]

const interestAreas = [
  'Analista de Automação com IA',
  'Analista de IA / AI Analyst',
  'Especialista em Automação No-code / Low-code',
  'Automation Developer',
  'Desenvolvedor de Chatbots',
  'AI Operations Analyst',
  'RPA Developer',
]

function About() {
  return (
    <section
      className="about-section"
      id="sobre"
      aria-labelledby="about-title"
      data-reveal
    >
      <div className="section-shell about-layout">
        <div className="about-intro">
          <p className="eyebrow">Sobre mim</p>
          <h2 id="about-title">Automação, IA e desenvolvimento.</h2>
          <p>
            Minha maior afinidade está em transformar processos em automações
            inteligentes. Quero construir minha carreira nessa interseção entre
            tecnologia, produto e atendimento digital.
          </p>
        </div>

        <div className="about-copy">
          <p>
            Sou estudante de Sistemas de Informação na UNI7, atualmente no 2º
            semestre, e atuo como estagiário de desenvolvimento de software.
          </p>
          <p>
            Tenho prática com React, JavaScript, APIs REST, n8n, automações e
            chatbots, além de rotinas de manutenção, correção de bugs e
            validação de alterações em aplicação web real.
          </p>

          <div className="about-facts" aria-label="Resumo profissional">
            {facts.map(({ label, value, Icon }) => (
              <span className="about-fact" key={label}>
                <Icon aria-hidden="true" focusable="false" />
                <span>
                  <strong>{label}</strong>
                  {value}
                </span>
              </span>
            ))}
          </div>

          <div className="interest-panel about-interest">
            <h3>Áreas que quero explorar</h3>
            <div className="interest-list" aria-label="Áreas de interesse">
              {interestAreas.map((area) => (
                <span key={area}>{area}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
