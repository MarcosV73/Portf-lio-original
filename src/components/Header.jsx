import { useEffect, useState } from 'react'
import { FiGithub } from 'react-icons/fi'
import { LuMenu, LuX } from 'react-icons/lu'

const navigation = [
  { label: 'Início', href: '/#inicio' },
  { label: 'Projetos', href: '/#projetos' },
  { label: 'Sobre', href: '/#sobre' },
  { label: 'Contato', href: '/#contato' },
]

const githubUrl = 'https://github.com/MarcosV73'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`site-header ${menuOpen ? 'is-open' : ''} ${
        scrolled ? 'is-scrolled' : ''
      }`}
    >
      <div className="header-inner">
        <a className="brand" href="/#inicio" onClick={closeMenu}>
          Marcos Vinícius
        </a>

        <nav className="site-nav" aria-label="Navegação principal">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a
            className="nav-external"
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            <FiGithub aria-hidden="true" focusable="false" />
            GitHub
          </a>
        </nav>

        <div className="header-actions">
          <button
            className="nav-toggle"
            type="button"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <LuX aria-hidden="true" focusable="false" />
            ) : (
              <LuMenu aria-hidden="true" focusable="false" />
            )}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
