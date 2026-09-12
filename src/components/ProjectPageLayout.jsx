import { Fragment } from 'react'
import { LuArrowLeft, LuExternalLink } from 'react-icons/lu'
import InteractiveWorkflow from './InteractiveWorkflow.jsx'
import ProjectGallery from './ProjectGallery.jsx'
import TechIcon from './TechIcon.jsx'
import TechTag from './TechTag.jsx'
import { getProjectNumber } from '../utils/routes.js'

function ProjectInfoGroup({ title, children, className = '' }) {
  return (
    <section className={`project-info-group ${className}`}>
      <h4>{title}</h4>
      {children}
    </section>
  )
}

function ProjectDemoPanel({ demo, projectTitle }) {
  if (!demo?.items?.length) {
    return null
  }

  return (
    <div className="project-demo-panel" aria-label={`Demonstração de ${projectTitle}`}>
      {demo.items.map((item) => (
        <article className="project-demo-card" key={item.title}>
          <span>{item.label}</span>
          <strong>{item.title}</strong>
          <p>{item.description}</p>
        </article>
      ))}
    </div>
  )
}

function ProjectDetails({ project, number }) {
  return (
    <div className="project-content">
      <p className="project-number">Projeto {number}</p>
      {project.kicker ? <p className="project-kicker">{project.kicker}</p> : null}
      <h1>{project.title}</h1>
      {project.subtitle ? (
        <p className="project-subtitle">{project.subtitle}</p>
      ) : null}

      <div className="project-info-panel">
        <ProjectInfoGroup title="Resumo" className="project-info-group--summary">
          <div className="project-description">
            {project.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </ProjectInfoGroup>

        {project.objective ? (
          <ProjectInfoGroup title="Objetivo" className="project-info-group--objective">
            <p>{project.objective}</p>
          </ProjectInfoGroup>
        ) : null}

        {project.architecture?.length ? (
          <ProjectInfoGroup
            title={project.architectureTitle || 'Principais elementos'}
            className="project-info-group--wide"
          >
            <div className="architecture-grid" aria-label="Arquitetura do projeto">
              {project.architecture.map((item) => (
                <article className="architecture-card" key={item.title}>
                  <span
                    className={`architecture-card__icon ${
                      item.icons?.length > 1 ? 'architecture-card__icon--group' : ''
                    }`}
                    aria-hidden="true"
                  >
                    {(item.icons || [item.icon || item.title]).map((icon, iconIndex) => (
                      <Fragment key={`${icon}-${iconIndex}`}>
                        {iconIndex > 0 ? (
                          <span className="architecture-card__icon-separator">+</span>
                        ) : null}
                        <TechIcon name={icon} />
                      </Fragment>
                    ))}
                  </span>
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </ProjectInfoGroup>
        ) : null}

        {project.highlights?.length ? (
          <ProjectInfoGroup title="Principais pontos" className="project-info-group--wide">
            <ul className="check-list">
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </ProjectInfoGroup>
        ) : null}

        <ProjectInfoGroup title="Stack" className="project-info-group--wide">
          <div className="tag-list" aria-label={`Tecnologias de ${project.title}`}>
            {project.technologies.map((tech) => (
              <TechTag className="tag" key={tech} name={tech} variant="project" />
            ))}
          </div>
        </ProjectInfoGroup>
      </div>

      {project.notes?.length ? (
        <div className="project-notes">
          {project.notes.map((note) => (
            <p key={note}>{note}</p>
          ))}
        </div>
      ) : null}

      {project.links?.length ? (
        <div className="project-actions">
          {project.links.map((link) => (
            <a
              className={`button ${
                link.variant === 'ghost' ? 'button--ghost' : 'button--secondary'
              }`}
              href={link.href}
              key={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LuExternalLink aria-hidden="true" focusable="false" />
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
    </div>
  )
}

function ProjectDemonstration({ project }) {
  const workflows = project.workflows || (project.workflow ? [project.workflow] : [])
  const hasWorkflows = workflows.length > 0
  const hasGallery = !hasWorkflows && project.gallery?.length
  const hasDemoPanel = !hasWorkflows && !hasGallery && project.demo?.items?.length

  if (!hasWorkflows && !hasGallery && !hasDemoPanel) {
    return null
  }

  return (
    <div className="project-demonstration" aria-label={`Demonstração de ${project.title}`}>
      <div className="project-demo-heading">
        <p className="project-number">
          {hasWorkflows ? 'Demonstração / workflows' : 'Demonstração visual'}
        </p>
        <h2>{hasWorkflows ? 'Fluxos interativos' : project.demo?.title || 'Interfaces do projeto'}</h2>
      </div>

      {hasWorkflows
        ? workflows.map((workflow) => (
            <InteractiveWorkflow
              workflow={workflow}
              key={workflow.anchorId || workflow.title}
            />
          ))
        : null}

      {hasGallery ? (
        <ProjectGallery
          items={project.gallery}
          projectId={project.id}
          projectTitle={project.title}
        />
      ) : null}

      {hasDemoPanel ? (
        <ProjectDemoPanel demo={project.demo} projectTitle={project.title} />
      ) : null}
    </div>
  )
}

function ProjectPageLayout({ project, index }) {
  const number = getProjectNumber(index)

  return (
    <main className="project-page" id="conteudo" data-reveal>
      <div className="section-shell">
        <a className="back-link" href="/#projetos">
          <LuArrowLeft aria-hidden="true" focusable="false" />
          Voltar para projetos
        </a>
      </div>

      <article className="project-section project-section--detail" id={project.id}>
        <div className="section-shell project-layout project-layout--detail">
          <ProjectDetails number={number} project={project} />
          <ProjectDemonstration project={project} />
        </div>
      </article>
    </main>
  )
}

export default ProjectPageLayout
