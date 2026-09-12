import TechIcon from './TechIcon.jsx'

function TechTag({ name, note, className = '', variant = 'default' }) {
  const classes = ['tech-tag', `tech-tag--${variant}`, className]
    .filter(Boolean)
    .join(' ')

  return (
    <span className={classes}>
      <TechIcon name={name} />
      <span className="tech-tag__label">{name}</span>
      {note ? <span className="tech-tag__note">{note}</span> : null}
    </span>
  )
}

export default TechTag
