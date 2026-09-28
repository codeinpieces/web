import { useState, type CSSProperties } from 'react'
import styles from './App.module.css'
import Navbar, { type Section } from './components/Navbar/Navbar'
import AnimatedBackground from './components/AnimatedBackground/AnimatedBackground'
import Footer from './components/Footer/Footer'
import Blog from './pages/Blog/Blog'
import Education from './pages/Education/Education'
import Experience from './pages/Experience/Experience'
import Home from './pages/Home/Home'
import Skills from './pages/Skills/Skills'

const palettes = [
  { name: 'Space Blue', accent: '#72b7d8', accentStrong: '#256582', background: '#071116', surface: '#f7f8f5', text: '#17232b', muted: '#5c6f79', nav: '#102631' },
  { name: 'Midnight Blue', accent: '#8298dc', accentStrong: '#394d98', background: '#090d1c', surface: '#f7f8f5', text: '#182037', muted: '#606c89', nav: '#171f3a' },
  { name: 'Steel Blue', accent: '#8eafc2', accentStrong: '#4d7187', background: '#111c22', surface: '#f7f8f5', text: '#1b2a33', muted: '#657981', nav: '#253944' },
  { name: 'Dark Azure', accent: '#4fa7ca', accentStrong: '#126183', background: '#06151d', surface: '#f7f8f5', text: '#162c36', muted: '#597783', nav: '#12303e' },
  { name: 'Stone Blue', accent: '#91aeb6', accentStrong: '#57767e', background: '#1b2529', surface: '#f7f8f5', text: '#223034', muted: '#68797c', nav: '#35474d' },
  { name: 'Fire Engine Red', accent: '#ff6b61', accentStrong: '#c83232', background: '#1b0b0e', surface: '#fff8f4', text: '#351719', muted: '#806668', nav: '#421c20' },
  { name: 'Falu Red', accent: '#c76659', accentStrong: '#78352e', background: '#180e0f', surface: '#fff8f4', text: '#351f1e', muted: '#816866', nav: '#402524' },
  { name: 'Fire Brick', accent: '#e06b4f', accentStrong: '#a63d2d', background: '#190d0b', surface: '#fff8f4', text: '#38221d', muted: '#85675f', nav: '#43241e' },
  { name: 'Candy Apple Red', accent: '#ff5360', accentStrong: '#c6243c', background: '#1c080e', surface: '#fff8f4', text: '#38151e', muted: '#83606a', nav: '#431a27' },
  { name: 'Hunter Green', accent: '#88b98b', accentStrong: '#376b43', background: '#09160f', surface: '#f5f8f1', text: '#1b3022', muted: '#607566', nav: '#193426' },
  { name: 'Pine Green', accent: '#66b68d', accentStrong: '#26714e', background: '#06180f', surface: '#f5f8f1', text: '#173126', muted: '#5e796b', nav: '#15382a' },
  { name: 'Blue Green', accent: '#62b8af', accentStrong: '#28776f', background: '#081817', surface: '#f5f8f1', text: '#183330', muted: '#5f7975', nav: '#173934' },
  { name: 'Fern Green', accent: '#a2c66c', accentStrong: '#628f38', background: '#131b0d', surface: '#f5f8f1', text: '#28351d', muted: '#738064', nav: '#2b3a20' },
] as const

function App() {
  const [activeSection, setActiveSection] = useState<Section>('home')
  const [paletteIndex, setPaletteIndex] = useState(0)
  const palette = palettes[paletteIndex]

  const appStyle = {
    '--accent': palette.accent,
    '--accent-strong': palette.accentStrong,
    '--page-background': palette.background,
    '--card-surface': palette.surface,
    '--card-text': palette.text,
    '--muted-text': palette.muted,
    '--nav-background': palette.nav,
  } as CSSProperties

  const changePalette = () => {
    setPaletteIndex((currentIndex) => (currentIndex + 1) % palettes.length)
  }

  const Page = {
    home: Home,
    education: Education,
    skills: Skills,
    blog: Blog,
    experience: Experience,
  }[activeSection]

  return (
    <main className={styles.app} style={appStyle}>
      <AnimatedBackground accent={palette.accent} />
      <Navbar
        activeSection={activeSection}
        paletteName={palette.name}
        onNavigate={setActiveSection}
        onPaletteChange={changePalette}
      />
      <Page />
      <Footer />
    </main>
  )
}

export default App
