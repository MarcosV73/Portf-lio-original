import { useEffect, useMemo, useState } from 'react'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import ProjectCard from './components/ProjectCard.jsx'
import ProjectPageLayout from './components/ProjectPageLayout.jsx'
import ScrollReveal from './components/ScrollReveal.jsx'
import SectionNav from './components/SectionNav.jsx'
import TechStack from './components/TechStack.jsx'
import { projects } from './data/projects.js'
import { getProjectSlug, homePath } from './utils/routes.js'

function normalizePath(pathname) {
  if (!pathname || pathname === '') {
    return homePath
  }

  return pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname
}

function readLocation() {
  return {
    path: normalizePath(window.location.pathname),
    hash: window.location.hash,
  }
}

function ProjectsPreview() {
  return (
    <section
      className="projects-section projects-section--home"
      id="projetos"
      aria-labelledby="projects-title"
      data-reveal
    >
      <div className="section-shell section-heading">
        <p className="eyebrow">Projetos selecionados</p>
        <h2 id="projects-title">Escolha um projeto para explorar</h2>
        <p>
          Uma visão rápida dos projetos. Cada card abre uma página com detalhes,
          stack e demonstração visual.
        </p>
      </div>

      <div className="section-shell projects-grid" aria-label="Lista de projetos">
        {projects.map((project, index) => (
          <ProjectCard project={project} index={index} key={project.id} />
        ))}
      </div>
    </section>
  )
}

function HomePage() {
  return (
    <main id="conteudo">
      <Hero />
      <TechStack />
      <ProjectsPreview />
      <About />
      <Contact />
    </main>
  )
}

function NotFoundPage() {
  return (
    <main className="project-page" id="conteudo" data-reveal>
      <section className="section-shell route-empty-state">
        <p className="eyebrow">Projeto não encontrado</p>
        <h1>Essa página não existe.</h1>
        <p>Volte para a lista de projetos e escolha uma das páginas disponíveis.</p>
        <a className="button" href="/#projetos">
          Voltar para projetos
        </a>
      </section>
    </main>
  )
}

function App() {
  const [locationState, setLocationState] = useState(readLocation)

  const route = useMemo(() => {
    const match = locationState.path.match(/^\/projetos\/([^/]+)$/)

    if (!match) {
      return { type: locationState.path === homePath ? 'home' : 'not-found' }
    }

    const slug = decodeURIComponent(match[1])
    const projectIndex = projects.findIndex(
      (project) => getProjectSlug(project) === slug || project.id === slug,
    )

    if (projectIndex < 0) {
      return { type: 'not-found' }
    }

    return {
      type: 'project',
      project: projects[projectIndex],
      projectIndex,
    }
  }, [locationState.path])

  useEffect(() => {
    const handlePopState = () => setLocationState(readLocation())

    const handleDocumentClick = (event) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return
      }

      const link = event.target.closest('a')
      if (!link || link.target || link.hasAttribute('download')) {
        return
      }

      const url = new URL(link.href, window.location.href)
      if (url.origin !== window.location.origin) {
        return
      }

      const nextPath = normalizePath(url.pathname)
      const isKnownRoute = nextPath === homePath || nextPath.startsWith('/projetos/')

      if (!isKnownRoute) {
        return
      }

      event.preventDefault()
      window.history.pushState({}, '', `${nextPath}${url.hash}`)
      setLocationState({ path: nextPath, hash: url.hash })
    }

    window.addEventListener('popstate', handlePopState)
    document.addEventListener('click', handleDocumentClick)

    return () => {
      window.removeEventListener('popstate', handlePopState)
      document.removeEventListener('click', handleDocumentClick)
    }
  }, [])

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (locationState.hash) {
        document
          .getElementById(locationState.hash.slice(1))
          ?.scrollIntoView({ block: 'start' })
        return
      }

      window.scrollTo({ top: 0, left: 0 })
    })

    return () => window.cancelAnimationFrame(frame)
  }, [locationState.path, locationState.hash])

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <SectionNav refreshKey={`${locationState.path}${locationState.hash}`} />
      <ScrollReveal refreshKey={`${locationState.path}${locationState.hash}`} />
      {route.type === 'home' ? <HomePage /> : null}
      {route.type === 'project' ? (
        <ProjectPageLayout project={route.project} index={route.projectIndex} />
      ) : null}
      {route.type === 'not-found' ? <NotFoundPage /> : null}
      <Footer />
    </>
  )
}

export default App
