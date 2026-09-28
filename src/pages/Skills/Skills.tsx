import styles from './Skills.module.css'

function Skills() {
  return (
    <section className={styles.section} aria-labelledby="skills-title">
      <div className={styles.card}>
        <p className={styles.eyebrow}>The toolkit</p>
        <h1 id="skills-title" className={styles.title}>Tools for turning ideas into interfaces.</h1>
        <p className={styles.description}>From accessible React components to thoughtful visual systems, these are the skills I reach for most.</p>
        <div className={styles.grid}>
          <div className={styles.infoBlock}>
            <span className={styles.number}>01</span>
            <h2>Frontend craft</h2>
            <p>React, TypeScript, responsive CSS, and interfaces that feel good at every size.</p>
          </div>
          <div className={styles.infoBlock}>
            <span className={styles.number}>02</span>
            <h2>Visual thinking</h2>
            <p>Design systems, motion, and visual decisions that give useful products a point of view.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
