import { profile, heroCtas } from '../../data/portfolio-data'
import Button from '../ui/button'
import styles from './hero-section.module.css'

/** Landing hero: badge + name + gradient title + tagline + CTAs (left),
 *  gradient-ring monogram avatar (right). Stacks on small screens. */
export default function HeroSection() {
  return (
    <section className={`section ${styles.hero}`}>
      <div className={`container ${styles.inner}`}>
        {/* Text column */}
        <div className={styles.text}>
          <span className={styles.badge}>
            <span className={styles.dot} aria-hidden="true" />
            {profile.badge}
          </span>

          <h1 className={styles.name}>{profile.name}</h1>

          <p className={`${styles.title} gradient-text`}>{profile.title}</p>

          <p className={styles.tagline}>{profile.tagline}</p>

          <div className={styles.ctas}>
            <Button
              variant="primary"
              href={heroCtas.primary.href}
              icon="arrow-right"
            >
              {heroCtas.primary.label}
            </Button>
            <Button
              variant="outline"
              href={heroCtas.secondary.href}
              download={heroCtas.secondary.download}
              icon="download"
              iconPosition="left"
            >
              {heroCtas.secondary.label}
            </Button>
          </div>
        </div>

        {/* Avatar column */}
        <div className={styles.avatarWrap}>
          <div className={styles.avatarRing}>
            <div className={styles.avatarInner}>
              <img
                className={styles.avatarImg}
                src={`${import.meta.env.BASE_URL}avatar.jpg`}
                alt={profile.name}
                width="320"
                height="320"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
