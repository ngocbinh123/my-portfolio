import styles from './stat-card.module.css'

/** Stat card: large gradient number + label. */
export default function StatCard({ value, label }) {
  return (
    <div className={styles.card}>
      <span className={`${styles.number} gradient-text`}>{value}</span>
      <span className={styles.label}>{label}</span>
    </div>
  )
}
