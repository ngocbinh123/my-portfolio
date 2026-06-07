import Icon from './icon'
import styles from './button.module.css'

/** Brand button. variant: 'primary' (gradient) | 'outline' | 'ghost'.
 *  Renders an <a> when `href` is provided, otherwise a <button>. */
export default function Button({
  children,
  variant = 'primary',
  href,
  icon,
  iconPosition = 'right',
  className = '',
  ...rest
}) {
  const cls = `${styles.btn} ${styles[variant]} ${className}`.trim()
  const content = (
    <>
      {icon && iconPosition === 'left' && <Icon name={icon} size={18} />}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <Icon name={icon} size={18} />}
    </>
  )

  if (href) {
    return (
      <a className={cls} href={href} {...rest}>
        {content}
      </a>
    )
  }
  return (
    <button className={cls} type="button" {...rest}>
      {content}
    </button>
  )
}
