import { useEffect, useState } from 'react'

function GalleryMedia({ item, large = false }) {
  if (item.src) {
    return (
      <img
        className="gallery-image"
        src={item.src}
        alt={item.alt || item.title}
        loading="lazy"
      />
    )
  }

  return (
    <div className={`gallery-placeholder ${large ? 'is-large' : ''}`}>
      <span className="placeholder-pattern" aria-hidden="true"></span>
      <span className="placeholder-text">{item.placeholder}</span>
    </div>
  )
}

function ProjectGallery({ items, projectId, projectTitle }) {
  const [selectedItem, setSelectedItem] = useState(null)
  const galleryClassName = projectId
    ? `project-gallery project-gallery--${projectId}`
    : 'project-gallery'

  useEffect(() => {
    if (!selectedItem) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedItem(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedItem])

  return (
    <div className={galleryClassName} aria-label={`Galeria de ${projectTitle}`}>
      {items.map((item) => (
        <button
          className="gallery-card"
          type="button"
          key={item.title}
          onClick={() => setSelectedItem(item)}
        >
          <span className="gallery-media">
            <GalleryMedia item={item} />
          </span>
          <span className="gallery-title">{item.title}</span>
        </button>
      ))}

      {selectedItem ? (
        <div
          className="lightbox"
          role="presentation"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="lightbox-panel"
            role="dialog"
            aria-modal="true"
            aria-label={`Visualização ampliada de ${selectedItem.title}`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="lightbox-close"
              type="button"
              aria-label="Fechar imagem"
              onClick={() => setSelectedItem(null)}
            >
              x
            </button>
            <div className="lightbox-media">
              <GalleryMedia item={selectedItem} large />
            </div>
            <div className="lightbox-caption">
              <strong>{selectedItem.title}</strong>
              <span>{projectTitle}</span>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default ProjectGallery
