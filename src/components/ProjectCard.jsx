import { LuArrowRight } from 'react-icons/lu'
import { SiCss, SiHtml5, SiJavascript, SiMake, SiN8N } from 'react-icons/si'
import TechTag from './TechTag.jsx'
import { getProjectNumber, getProjectPath } from '../utils/routes.js'

const cardTools = {
  'chatbot-n8n': {
    label: 'n8n',
    icons: [{ Icon: SiN8N, color: '#ff6d5a', label: 'n8n' }],
    tags: ['JavaScript', 'APIs REST', 'Webhooks', 'MongoDB', 'Chatwoot'],
  },
  'automacao-vagas-make': {
    label: 'Make',
    icons: [{ Icon: SiMake, color: '#8b5cf6', label: 'Make' }],
    tags: ['Gmail', 'Google Sheets', 'Telegram Bot', 'Text Parser'],
  },
  'aplicacao-react-corporativa': {
    label: 'JavaScript',
    icons: [{ Icon: SiJavascript, color: '#f7df1e', label: 'JavaScript' }],
    tags: ['React', 'HTML', 'CSS', 'Axios'],
  },
  'redesign-fourchan': {
    label: 'HTML + CSS',
    icons: [
      { Icon: SiHtml5, color: '#e34f26', label: 'HTML5' },
      { Icon: SiCss, color: '#1572b6', label: 'CSS3' },
    ],
    tags: ['HTML5', 'CSS3'],
  },
  'calculadora-matrizes': {
    label: 'JavaScript',
    icons: [{ Icon: SiJavascript, color: '#f7df1e', label: 'JavaScript' }],
    tags: ['HTML5', 'CSS3', 'Lógica', 'Matrizes'],
  },
}

function ProjectCard({ project, index }) {
  const number = getProjectNumber(index)
  const tool = cardTools[project.id] || {
    label: project.technologies[0],
    icons: [],
    tags: project.technologies.slice(1, 5),
  }

  return (
    <a
      className="project-card"
      href={getProjectPath(project)}
      aria-label={`Ver projeto ${number}: ${project.title}`}
    >
      <span className="project-card__meta">Projeto {number}</span>

      <strong>{project.title}</strong>

      <span className="project-card__tool" aria-label={`Ferramenta principal: ${tool.label}`}>
        <span className="project-card__tool-icons" aria-hidden="true">
          {tool.icons.map(({ Icon, color, label }) => (
            <span
              className="project-card__tool-icon"
              style={{ '--tool-color': color }}
              key={label}
            >
              <Icon focusable="false" />
            </span>
          ))}
        </span>
        <span className="project-card__tool-name">{tool.label}</span>
      </span>

      <span className="project-card__techs" aria-label={`Recursos de ${project.title}`}>
        {tool.tags.map((tech) => (
          <TechTag
            className="project-card__tech"
            key={tech}
            name={tech}
            variant="card"
          />
        ))}
      </span>

      <span className="project-card__action">
        Ver projeto
        <LuArrowRight aria-hidden="true" focusable="false" />
      </span>
    </a>
  )
}

export default ProjectCard
