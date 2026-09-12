import TechTag from './TechTag.jsx'

const skillGroups = [
  {
    title: 'Front-end',
    items: ['JavaScript', 'React', 'HTML5', 'CSS3'],
  },
  {
    title: 'Integrações e automação',
    items: ['n8n', 'Make', 'APIs REST', 'Axios', 'Webhooks', 'Google Sheets', 'JSON'],
  },
  {
    title: 'Fluxo de desenvolvimento',
    items: ['Git', 'GitHub', 'VS Code', 'Yarn', 'NPM'],
  },
]

const supportTools = [
  'Codex',
  'Antigravity',
  'Figma (familiaridade)',
  'Bubble (familiaridade)',
]

function SkillTag({ skill }) {
  return <TechTag className="skill-card" name={skill} variant="skill" />
}

function Skills() {
  return (
    <section className="skills-section" aria-labelledby="skills-title" data-reveal>
      <div className="section-shell">
        <div className="section-heading section-heading--compact">
          <p className="eyebrow">Tecnologias</p>
          <h2 id="skills-title">Stack enxuta para web e automação</h2>
          <p>
            Ferramentas que aparecem na minha prática atual, organizadas por
            uso para reduzir ruído visual.
          </p>
        </div>

        <div className="skills-layout">
          {skillGroups.map((group) => (
            <div className="skills-group" key={group.title}>
              <h3>{group.title}</h3>
              <div className="skills-grid" aria-label={group.title}>
                {group.items.map((skill) => (
                  <SkillTag skill={skill} key={skill} />
                ))}
              </div>
            </div>
          ))}

          <aside className="interest-panel">
            <h3>Ferramentas de apoio e familiaridade</h3>
            <div className="tag-list tag-list--compact">
              {supportTools.map((tool) => (
                <SkillTag skill={tool} key={tool} />
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default Skills
