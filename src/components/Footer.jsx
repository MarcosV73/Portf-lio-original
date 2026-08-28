const githubUrl = 'https://github.com/MarcosV73'
const linkedinUrl =
  'http://www.linkedin.com/in/marcos-vin%C3%ADcius-damasceno-gon%C3%A7alves-148987391'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-inner">
        <p>© Marcos Vinícius Damasceno Gonçalves</p>
        <nav aria-label="Links do rodapé">
          <a href={githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={linkedinUrl} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
