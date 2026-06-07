import Icon from '../ui/icon'
import Button from '../ui/button'
import { footer, profile } from '../../data/portfolio-data'
import styles from './footer-section.module.css'

/** Footer / Contact — centered call-to-action, email CTA, social links, copyright. */
export default function FooterSection() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.heading}>
          <h2 className={styles.title}>Let&apos;s work together</h2>
          <p className={styles.subtitle}>
            Open to new opportunities and collaborations.
          </p>
        </div>

        <Button
          variant="outline"
          href={`mailto:${profile.email}`}
          icon="mail"
          iconPosition="left"
        >
          {profile.email}
        </Button>

        <ul className={styles.socials}>
          {footer.socials.map((s) => (
            <li key={s.label}>
              <a
                className={styles.socialLink}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
              >
                <Icon name={s.icon} size={20} />
              </a>
            </li>
          ))}
        </ul>

        <p className={styles.copyright}>{footer.copyright}</p>
      </div>
    </footer>
  )
}
