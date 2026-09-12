import { FiMail } from 'react-icons/fi'
import { SiWhatsapp } from 'react-icons/si'

const email = 'marcosvdg2007@gmail.com'
const phone = '+55 85 99954-0333'

const contacts = [
  {
    label: 'E-mail',
    value: email,
    href: `mailto:${email}`,
    Icon: FiMail,
  },
  {
    label: 'WhatsApp',
    value: phone,
    href: 'https://wa.me/5585999540333',
    external: true,
    Icon: SiWhatsapp,
  },
]

function Contact() {
  return (
    <section
      className="contact-section"
      id="contato"
      aria-labelledby="contact-title"
      data-reveal
    >
      <div className="section-shell contact-layout">
        <div className="contact-copy">
          <p className="eyebrow">Contato</p>
          <h2 id="contact-title">Vamos conversar?</h2>
          <p>
            Estou aberto a oportunidades de estágio e posições iniciais em
            desenvolvimento web, automação e projetos que conectem APIs,
            atendimento digital e inteligência artificial.
          </p>
        </div>

        <div className="contact-list">
          {contacts.map(({ Icon, ...contact }) => (
            <a
              className="contact-link"
              href={contact.href}
              key={contact.label}
              target={contact.external ? '_blank' : undefined}
              rel={contact.external ? 'noreferrer' : undefined}
            >
              <Icon aria-hidden="true" focusable="false" />
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
