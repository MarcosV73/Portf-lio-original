function About() {
  return (
    <section className="about-section" id="sobre" aria-labelledby="about-title">
      <div className="section-shell about-layout">
        <div>
          <p className="eyebrow">Sobre mim</p>
          <h2 id="about-title">Desenvolvimento com prática, estudo e atenção ao detalhe</h2>
        </div>
        <div className="about-copy">
          <p>
            Sou estudante de Sistemas de Informação na UNI7 e atualmente atuo
            como estagiário de Desenvolvimento de Software.
          </p>
          <p>
            Tenho experiência prática com desenvolvimento web, integração com
            APIs REST, automações utilizando n8n, desenvolvimento de chatbots,
            testes, debugging e versionamento utilizando Git e GitHub.
          </p>
          <p>
            Também utilizo ferramentas como Codex e Antigravity no processo de
            AI-Assisted Software Development, auxiliando na análise de código,
            implementação de funcionalidades, investigação de erros e
            desenvolvimento de soluções.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
