const githubUrl = 'https://github.com/MarcosV73'
const linkedinUrl =
  'http://www.linkedin.com/in/marcos-vin%C3%ADcius-damasceno-gon%C3%A7alves-148987391'
const email = 'marcosvdg2007@gmail.com'
const phone = '+55 85 99954-0333'

const contacts = [
  {
    label: 'GitHub',
    value: 'github.com/MarcosV73',
    href: githubUrl,
    external: true,
  },
  {
    label: 'LinkedIn',
    value: 'Marcos Vinícius Damasceno Gonçalves',
    href: linkedinUrl,
    external: true,
  },
  {
    label: 'E-mail',
    value: email,
    href: `mailto:${email}`,
  },
  {
    label: 'Telefone',
    value: phone,
    href: 'tel:+5585999540333',
  },
  {
    label: 'WhatsApp',
    value: phone,
    href: 'https://wa.me/5585999540333',
    external: true,
  },
]

function Contact() {
  return (
    <section className="contact-section" id="contato" aria-labelledby="contact-title">
      <div className="section-shell contact-layout">
        <div className="contact-copy">
          <p className="eyebrow">Contato</p>
          <h2 id="contact-title">Vamos conversar?</h2>
          <p>
            Estou aberto a oportunidades de estágio, jovem aprendiz e posições
            iniciais nas áreas de Desenvolvimento de Software, Desenvolvimento
            Web, Automação, Inteligência Artificial aplicada e QA.
          </p>
        </div>

        <div className="contact-list">
          {contacts.map((contact) => (
            <a
              className="contact-link"
              href={contact.href}
              key={contact.label}
              target={contact.external ? '_blank' : undefined}
              rel={contact.external ? 'noreferrer' : undefined}
            >
              <span>{contact.label}</span>
              <strong>{contact.value}</strong>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
