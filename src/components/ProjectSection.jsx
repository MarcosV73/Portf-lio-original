import ProjectGallery from './ProjectGallery.jsx'

function ProjectSection({ project, position }) {
  const number = String(position).padStart(2, '0')

  return (
    <article
      className={`project-section ${
        project.featured ? 'project-section--featured' : ''
      }`}
      id={project.id}
    >
      <div className="section-shell project-layout">
        <div className="project-content">
          <p className="project-number">Projeto {number}</p>
          {project.kicker ? <p className="project-kicker">{project.kicker}</p> : null}
          <h3>{project.title}</h3>
          {project.subtitle ? (
            <p className="project-subtitle">{project.subtitle}</p>
          ) : null}

          <div className="project-description">
            {project.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          {project.highlights?.length ? (
            <ul className="check-list">
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}

          <div className="tag-list" aria-label={`Tecnologias de ${project.title}`}>
            {project.technologies.map((tech) => (
              <span className="tag" key={tech}>
                {tech}
              </span>
            ))}
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
                  {link.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>

        <ProjectGallery
          items={project.gallery}
          projectId={project.id}
          projectTitle={project.title}
        />
      </div>
    </article>
  )
}

export default ProjectSection
