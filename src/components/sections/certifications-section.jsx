import Icon from '../ui/icon'
import SectionHeader from '../ui/section-header'
import { certifications } from '../../data/portfolio-data'
import styles from './certifications-section.module.css'

/** Certifications — responsive grid of credential cards (3/2/1 cols). */
export default function CertificationsSection() {
  return (
    <section id="certifications" className={`section ${styles.section}`}>
      <div className="container">
        <SectionHeader
          title={certifications.title}
          subtitle={certifications.subtitle}
        />

        <ul className={styles.grid}>
          {certifications.items.map((cert) => (
            <li key={cert.name}>
              <a className={styles.card} href="#">
                <span className={`${styles.logo} gradient-text`} aria-hidden="true">
                  {cert.name.charAt(0)}
                </span>
                <span className={styles.info}>
                  <span className={styles.name}>{cert.name}</span>
                  <span className={styles.issuer}>{cert.issuer}</span>
                </span>
                <Icon
                  name="external-link"
                  size={16}
                  style={{ color: 'var(--text-muted)' }}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
