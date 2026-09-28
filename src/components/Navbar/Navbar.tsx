import {
  BookOpen,
  BriefcaseBusiness,
  GraduationCap,
  House,
  Paintbrush,
  Sparkles,
} from 'lucide-react'
import styles from './Navbar.module.css'

export type Section = 'home' | 'education' | 'skills' | 'blog' | 'experience'

type NavItem = {
  label: string
  section: Section
  Icon: typeof GraduationCap
}

const leftItems: NavItem[] = [
  { label: 'Education', section: 'education', Icon: GraduationCap },
  { label: 'Skills', section: 'skills', Icon: Sparkles },
]

const rightItems: NavItem[] = [
  { label: 'Blog', section: 'blog', Icon: BookOpen },
  { label: 'Experience', section: 'experience', Icon: BriefcaseBusiness },
]

type NavbarProps = {
  activeSection: Section
  paletteName: string
  onNavigate: (section: Section) => void
  onPaletteChange: () => void
}

function NavLink({ label, section, Icon, activeSection, onNavigate }: NavItem & Pick<NavbarProps, 'activeSection' | 'onNavigate'>) {
  return (
    <button
      className={`${styles.link} ${activeSection === section ? styles.activeLink : ''}`}
      type="button"
      onClick={() => onNavigate(section)}
      aria-current={activeSection === section ? 'page' : undefined}
    >
      <Icon aria-hidden="true" size={17} strokeWidth={2} />
      <span>{label}</span>
    </button>
  )
}

function Navbar({ activeSection, paletteName, onNavigate, onPaletteChange }: NavbarProps) {
  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main navigation">
        <div className={styles.group}>
          {leftItems.map((item) => (
            <NavLink key={item.label} {...item} activeSection={activeSection} onNavigate={onNavigate} />
          ))}
        </div>

        <button
          className={`${styles.homeLink} ${activeSection === 'home' ? styles.activeHomeLink : ''}`}
          type="button"
          onClick={() => onNavigate('home')}
          aria-current={activeSection === 'home' ? 'page' : undefined}
        >
          <House aria-hidden="true" size={20} strokeWidth={2.2} />
          <span>Home</span>
        </button>

        <div className={`${styles.group} ${styles.rightGroup}`}>
          {rightItems.map((item) => (
            <NavLink key={item.label} {...item} activeSection={activeSection} onNavigate={onNavigate} />
          ))}
        </div>
      </nav>
      <button className={styles.paletteButton} type="button" onClick={onPaletteChange}>
        <Paintbrush aria-hidden="true" size={16} />
        <span>{paletteName}</span>
      </button>
    </header>
  )
}

export default Navbar
