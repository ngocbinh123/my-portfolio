import { about } from '../../data/portfolio-data'
import SectionHeader from '../ui/section-header'
import StatCard from '../ui/stat-card'
import styles from './about-section.module.css'

/** About: section header + two-column bio / stats grid. Stacks on small screens. */
export default function AboutSection() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <SectionHeader title={about.title} subtitle={about.subtitle} />

        <div className={styles.body}>
          <div className={styles.bio}>
            {about.bio.map((paragraph, i) => (
              <p key={i} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}
          </div>

          <div className={styles.stats}>
            {about.stats.map((stat) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
