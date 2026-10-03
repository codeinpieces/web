import { useEffect, useRef, useState } from 'react'
import {
  BookOpen,
  BriefcaseBusiness,
  Check,
  Volume2,
  GraduationCap,
  Galaxy,
  Pause,
  Paintbrush,
  Play,
  Sparkles
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

const musicTracks = Object.entries(
  import.meta.glob<string>('../../assets/music/*.{mp3,ogg,wav,m4a}', {
    eager: true,
    query: '?url',
    import: 'default',
  }),
)
  .map(([path, src]) => ({
    name: (path.split('/').pop() ?? 'Untitled').replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' '),
    src,
  }))
  .sort((first, second) => first.name.localeCompare(second.name))

type NavbarProps = {
  activeSection: Section
  paletteName: string
  palettes: readonly { name: string; accent: string }[]
  onNavigate: (section: Section) => void
  onPaletteChange: (index: number) => void
}

function NavLink({ label, section, Icon, activeSection, onNavigate }: NavItem & Pick<NavbarProps, 'activeSection' | 'onNavigate'>) {
  return (
    <button
      className={`${styles.link} ${activeSection === section ? styles.activeLink : ''}`}
      type="button"
      onClick={() => onNavigate(section)}
      aria-label={label}
      aria-current={activeSection === section ? 'page' : undefined}
    >
      <Icon aria-hidden="true" size={17} strokeWidth={2} />
      <span>{label}</span>
    </button>
  )
}

function Navbar({ activeSection, paletteName, palettes, onNavigate, onPaletteChange }: NavbarProps) {
  const [selectedTrack, setSelectedTrack] = useState<(typeof musicTracks)[number] | null>(musicTracks[0] ?? null)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.volume = 0.10

    if (!selectedTrack || !isPlaying) {
      audio.pause()
      return
    }

    void audio.play().catch(() => setIsPlaying(false))
  }, [isPlaying, selectedTrack])

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
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
            aria-label="Home"
            title="Home"
            aria-current={activeSection === 'home' ? 'page' : undefined}
          >
            <Galaxy aria-hidden="true" size={24} strokeWidth={2.4} />
          </button>

          <div className={`${styles.group} ${styles.rightGroup}`}>
            {rightItems.map((item) => (
              <NavLink key={item.label} {...item} activeSection={activeSection} onNavigate={onNavigate} />
            ))}
          </div>
        </nav>
        <div className={styles.headerControls}>
          <details className={styles.musicDropdown}>
            <summary className={`${styles.paletteButton} ${styles.musicButton}`} aria-label="Ambient music options" title="Ambient music">
              <Volume2 aria-hidden="true" size={18} />
            </summary>
            <div className={`${styles.paletteMenu} ${styles.musicMenu}`} aria-label="Ambient music controls">
              <div className={styles.musicActions}>
                <button
                  className={`${styles.paletteOption} ${styles.musicAction}`}
                  type="button"
                  onClick={() => setIsPlaying((playing) => !playing)}
                  disabled={!selectedTrack}
                  aria-label={isPlaying ? 'Pause ambient music' : 'Play ambient music'}
                >
                  {isPlaying ? <Pause aria-hidden="true" size={16} /> : <Play aria-hidden="true" size={16} />}
                  <span>{isPlaying ? 'Pause' : 'Play'}</span>
                </button>
              </div>
              {musicTracks.length === 0 ? (
                <p className={styles.emptyMusic}>No audio files found</p>
              ) : (
                musicTracks.map((track) => (
                  <button
                    key={track.src}
                    className={styles.paletteOption}
                    type="button"
                    onClick={(event) => {
                      setSelectedTrack(track)
                      setIsPlaying(true)
                      event.currentTarget.closest('details')?.removeAttribute('open')
                    }}
                    aria-current={track.src === selectedTrack?.src ? 'true' : undefined}
                  >
                    <span>{track.name}</span>
                    {track.src === selectedTrack?.src && <Check aria-hidden="true" size={15} />}
                  </button>
                ))
              )}
            </div>
          </details>
          <details className={styles.paletteDropdown}>
            <summary
              className={styles.paletteButton}
              aria-label={`Choose color palette. Current palette: ${paletteName}`}
              title={`Color palette: ${paletteName}`}
            >
              <Paintbrush aria-hidden="true" size={16} />
            </summary>
            <div className={styles.paletteMenu} aria-label="Choose color palette">
              {palettes.map((palette, index) => (
                <button
                  key={palette.name}
                  className={styles.paletteOption}
                  type="button"
                  onClick={(event) => {
                    onPaletteChange(index)
                    event.currentTarget.closest('details')?.removeAttribute('open')
                  }}
                  aria-current={palette.name === paletteName ? 'true' : undefined}
                >
                  <span className={styles.paletteSwatch} style={{ backgroundColor: palette.accent }} />
                  <span>{palette.name}</span>
                  {palette.name === paletteName && <Check aria-hidden="true" size={15} />}
                </button>
              ))}
            </div>
          </details>
        </div>
        <audio ref={audioRef} className={styles.audio} src={selectedTrack?.src} loop preload="none" />
      </div>
    </header>
  )
}

export default Navbar
