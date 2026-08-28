const skills = [
  'JavaScript',
  'React',
  'HTML5',
  'CSS3',
  'n8n',
  'APIs REST',
  'Axios',
  'Webhooks',
  'JSON',
  'Git',
  'GitHub',
  'Codex',
  'Antigravity',
]

function Skills() {
  return (
    <section className="skills-section" aria-labelledby="skills-title">
      <div className="section-shell">
        <div className="section-heading section-heading--compact">
          <p className="eyebrow">Tecnologias</p>
          <h2 id="skills-title">Ferramentas que fazem parte do meu fluxo</h2>
        </div>
        <div className="skills-grid" aria-label="Lista de tecnologias">
          {skills.map((skill) => (
            <span className="skill-card" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
