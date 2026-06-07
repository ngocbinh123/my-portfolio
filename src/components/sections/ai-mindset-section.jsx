import Icon from '../ui/icon'
import SectionHeader from '../ui/section-header'
import { aiMindset } from '../../data/portfolio-data'
import styles from './ai-mindset-section.module.css'

/** AI-First Mindset: 3-up grid of tool cards (Claude Code, Cursor, Gemini/ChatGPT). */
export default function AiMindsetSection() {
  return (
    <section id="ai" className={`section ${styles.section}`}>
      <div className="container">
        <SectionHeader title={aiMindset.title} subtitle={aiMindset.subtitle} />

        <ul className={styles.grid}>
          {aiMindset.cards.map((card) => (
            <li
              key={card.title}
              className={styles.card}
              style={{ borderTopColor: card.accent }}
            >
              <Icon name={card.icon} size={32} style={{ color: card.accent }} />
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDesc}>{card.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
