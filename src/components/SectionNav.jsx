import { useEffect, useState } from 'react'
import {
  LuFolderKanban,
  LuHouse,
  LuLayers3,
  LuMail,
  LuUserRound,
} from 'react-icons/lu'

const sections = [
  { id: 'inicio', label: 'Início', Icon: LuHouse },
  { id: 'stack', label: 'Stack', Icon: LuLayers3 },
  { id: 'projetos', label: 'Projetos', Icon: LuFolderKanban },
  { id: 'sobre', label: 'Sobre', Icon: LuUserRound },
  { id: 'contato', label: 'Contato', Icon: LuMail },
]

function SectionNav({ refreshKey }) {
  const [activeSection, setActiveSection] = useState('inicio')

  useEffect(() => {
    const elements = sections
      .map((section) => document.getElementById(section.id))
      .filter(Boolean)

    if (!elements.length || !('IntersectionObserver' in window)) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible?.target.id) {
          setActiveSection(visible.target.id)
        }
      },
      {
        rootMargin: '-22% 0px -58% 0px',
        threshold: [0.08, 0.24, 0.42],
      },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [refreshKey])

  return (
    <nav className="section-nav" aria-label="Navegação por seção">
      {sections.map(({ id, label, Icon }) => (
        <a
          className={activeSection === id ? 'is-active' : undefined}
          href={`/#${id}`}
          key={id}
          aria-label={label}
          aria-current={activeSection === id ? 'true' : undefined}
        >
          <Icon aria-hidden="true" focusable="false" />
          <span>{label}</span>
        </a>
      ))}
    </nav>
  )
}

export default SectionNav
