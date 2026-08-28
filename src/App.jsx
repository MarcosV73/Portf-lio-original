import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import ProjectSection from './components/ProjectSection.jsx'
import Skills from './components/Skills.jsx'
import { projects } from './data/projects.js'

function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <section
          className="projects-section"
          id="projetos"
          aria-labelledby="projects-title"
        >
          <div className="section-shell section-heading">
            <p className="eyebrow">Projetos selecionados</p>
            <h2 id="projects-title">
              Experiências práticas em web, automação e interfaces
            </h2>
            <p>
              Uma seleção focada em construção de produto, integração com APIs e
              aprendizado aplicado, com o projeto em n8n em destaque.
            </p>
          </div>

          {projects.map((project, index) => (
            <ProjectSection
              key={project.id}
              project={project}
              position={index + 1}
            />
          ))}
        </section>
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
