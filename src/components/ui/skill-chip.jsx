import Icon from './icon'
import styles from './skill-chip.module.css'

/** Pill chip with optional icon. When `accent` is set (trending), it tints the
 *  border, icon and label; otherwise uses the neutral surface style. */
export default function SkillChip({ label, icon, accent }) {
  const style = accent
    ? { borderColor: accent, color: accent }
    : undefined
  return (
    <span className={`${styles.chip} ${accent ? styles.accented : ''}`} style={style}>
      {icon && <Icon name={icon} size={14} style={accent ? { color: accent } : undefined} className={styles.icon} />}
      <span>{label}</span>
    </span>
  )
}
