import { Link2 } from 'lucide-react'
import styles from './Home.module.css'
import profileImage from '../../assets/images/pfp.png'

function Home() {
  return (
    <section className={styles.section} aria-labelledby="profile-name">
      <div className={styles.card}>
        <img
          className={styles.profileImage}
          src={profileImage}
          alt="Profile picture for @codingpieces"
        />
        <p id="profile-name" className={styles.profileName}>
          @codingpieces
        </p>
        <p className={styles.profileBio}>Systems Engineer • AI & Data Engineer  </p>
        <nav className={styles.socialLinks} aria-label="Social links">
          <a className={styles.socialLink} href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Link2 aria-hidden="true" size={20} />
          </a>
          <a className={styles.socialLink} href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Link2 aria-hidden="true" size={20} />
          </a>
          <a className={styles.socialLink} href="https://gitlab.com/" target="_blank" rel="noreferrer" aria-label="GitLab">
            <Link2 aria-hidden="true" size={20} />
          </a>
        </nav>
        <p className={styles.profileBio}>I'm a Systems Engineer with a passion for AI and Data Engineering, and I specialize in Cloud Development on AWS and GCP.</p>
      </div>
    </section>
  )
}

export default Home
