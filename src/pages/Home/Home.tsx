import styles from './Home.module.css'
import profileImage from '../../assets/images/pfp.png'
import githubLogo from '../../assets/images/github-logo.png'
import gitlabLogo from '../../assets/images/gitlab-logo.png'
import linkedInLogo from '../../assets/images/linkedin-logo.png'

function Home() {
  const socialLinks = [
    { href: 'https://www.linkedin.com/in/codeinpieces', label: 'LinkedIn', logo: linkedInLogo },
    { href: 'https://github.com/codeinpieces', label: 'GitHub', logo: githubLogo },
    { href: 'https://gitlab.com/Codingpieces', label: 'GitLab', logo: gitlabLogo }
  ]

  const bioText = `I'm Sebastian, a polymathic Engineer from Colombia 🇨🇴.
  I love the intersection of science, technology and art to solve complex problems.
  Guided by curiosity and learning, I love to create cool stuff that makes people's lives easier, I'm interested in a variety of topics like AI, Big Data, Cybersecurity, Simulations, Computer Graphics, IoT, Math, Statistics, Physics, Robotics, and more. As you can read, a lot of things, but I kind of thrive in data engineering, cloud computing and systems architecture.
  Currently working as a Data Engineer.`
  
  return (
    <section className={styles.section} aria-labelledby="profile-name">
      <div className={styles.card}>
        <img
          className={styles.profileImage}
          src={profileImage}
          alt="Profile picture for @codingpieces"
        />
        <p id="profile-name" className={styles.profileName}>
          @codeinpieces
        </p>
        <p className={styles.profileSubtitle}>Systems Engineer • AI & Data Engineer  </p>
        <nav className={styles.socialLinks} aria-label="Social links">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              className={styles.socialLink}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
            >
              <img src={link.logo} alt="" aria-hidden="true" />
            </a>
          ))}
        </nav>
        <p className={styles.profileBio}>{bioText}</p>
      </div>
    </section>
  )
}

export default Home
