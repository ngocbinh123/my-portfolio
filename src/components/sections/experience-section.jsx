import SectionHeader from '../ui/section-header'
import { experience } from '../../data/portfolio-data'
import styles from './experience-section.module.css'

/** Experience: vertical timeline with a gradient connector line per role. */
export default function ExperienceSection() {
  const { items } = experience
  const lastIndex = items.length - 1

  return (
    <section id="experience" className={`section ${styles.section}`}>
      <div className="container">
        <SectionHeader title={experience.title} subtitle={experience.subtitle} />

        <ol className={styles.timeline}>
          {items.map((item, index) => (
            <li key={`${item.company}-${item.period}`} className={styles.item}>
              <div className={styles.dotColumn} aria-hidden="true">
                <span className={styles.dot} />
                {index !== lastIndex && <span className={styles.line} />}
              </div>

              <div className={styles.content}>
                <span className={styles.period}>{item.period}</span>
                <h3 className={styles.company}>{item.company}</h3>
                <p className={styles.role}>{item.role}</p>
                <ul className={styles.bullets}>
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className={styles.bullet}>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
