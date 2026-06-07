import styles from './section-header.module.css'

/** Accent line + title + subtitle. Used at the top of every section. */
export default function SectionHeader({ title, subtitle, align = 'left' }) {
  return (
    <header className={styles.header} data-align={align}>
      <span className={styles.accentLine} aria-hidden="true" />
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </header>
  )
}
