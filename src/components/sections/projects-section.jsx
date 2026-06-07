import SectionHeader from '../ui/section-header'
import SkillChip from '../ui/skill-chip'
import { projects } from '../../data/portfolio-data'
import styles from './projects-section.module.css'

/** Featured-projects section: responsive card grid (3/2/1 cols) with
 *  lazy-loaded cover image, title, description, and tag chips. */
export default function ProjectsSection() {
  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className="container">
        <SectionHeader title={projects.title} subtitle={projects.subtitle} />

        <div className={styles.grid}>
          {projects.items.map((project) => (
            <article key={project.title} className={styles.card}>
              <div className={styles.media}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.image}
                  loading="lazy"
                />
              </div>
              <div className={styles.body}>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.desc}>{project.desc}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <SkillChip key={tag} label={tag} />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
