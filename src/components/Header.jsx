import { useState } from 'react'

const navigation = [
  { label: 'Início', href: '#inicio' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
]

const githubUrl = 'https://github.com/MarcosV73'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`site-header ${menuOpen ? 'is-open' : ''}`}>
      <div className="header-inner">
        <a className="brand" href="#inicio" onClick={closeMenu}>
          <span className="brand-mark">
            <img
              src="/marcos-logo.png"
              alt="Logo de Marcos Vinícius"
              width="42"
              height="42"
            />
          </span>
          <span className="brand-copy">
            <strong>Marcos Vinícius</strong>
            <span>Software Development</span>
          </span>
        </a>

        <nav className="site-nav" aria-label="Navegação principal">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a
            className="button button--compact"
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <button
            className="nav-toggle"
            type="button"
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
