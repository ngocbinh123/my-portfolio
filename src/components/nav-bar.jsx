import { useState, useEffect } from 'react'
import { navLinks, cv } from '../data/portfolio-data'
import Button from './ui/button'
import Icon from './ui/icon'
import ThemeToggle from './theme-toggle'
import styles from './nav-bar.module.css'

/** Fixed, blurred navbar. Desktop: inline links. Mobile: hamburger dropdown. */
export default function NavBar() {
  const [open, setOpen] = useState(false)

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={styles.nav}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.logo} onClick={close}>
          <span className={styles.bracket}>&lt;</span>
          <span className={styles.mono}>NB</span>
          <span className={styles.bracketViolet}>/&gt;</span>
        </a>

        <nav className={styles.links} aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <ThemeToggle />
          <div className={styles.cta}>
            <Button href={cv.url} download={cv.filename} icon="download" iconPosition="left" style={{ fontSize: 14, padding: '10px 20px' }}>
              {cv.label}
            </Button>
          </div>
          <button
            type="button"
            className={styles.burger}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? 'x' : 'menu'} size={22} />
          </button>
        </div>
      </div>

      {open && (
        <div className={styles.mobileMenu}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={styles.mobileLink} onClick={close}>
              {link.label}
            </a>
          ))}
          <Button href={cv.url} download={cv.filename} icon="download" iconPosition="left" onClick={close}>
            {cv.label}
          </Button>
        </div>
      )}
    </header>
  )
}
