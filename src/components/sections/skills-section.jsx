import SectionHeader from '../ui/section-header'
import SkillChip from '../ui/skill-chip'
import { skills } from '../../data/portfolio-data'
import styles from './skills-section.module.css'

/** Tech-stack section: grouped, wrapping pill chips. Trending group chips
 *  are accent-tinted; others use the neutral chip style. */
export default function SkillsSection() {
  return (
    <section id="skills" className={`section ${styles.skills}`}>
      <div className="container">
        <SectionHeader title={skills.title} subtitle={skills.subtitle} />

        <div className={styles.groups}>
          {skills.groups.map((group) => (
            <div key={group.category} className={styles.group}>
              <span className={styles.category} style={{ color: group.accent }}>
                {group.category}
              </span>
              <div className={styles.chips}>
                {group.chips.map((chip) => (
                  <SkillChip
                    key={chip.label}
                    label={chip.label}
                    icon={chip.icon}
                    accent={group.trending ? group.accent : undefined}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
