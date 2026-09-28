import styles from './Experience.module.css'

function Experience() {
  return (
    <section className={styles.section} aria-labelledby="experience-title">
      <div className={styles.card}>
        <p className={styles.eyebrow}>The path so far</p>
        <h1 id="experience-title" className={styles.title}>A practice built through doing.</h1>
        <p className={styles.description}>Selected roles, collaborations, and shipped work that have shaped my way of solving problems.</p>
        <div className={styles.grid}>
          <div className={styles.infoBlock}>
            <span className={styles.number}>01</span>
            <h2>Working in public</h2>
            <p>Sharing experiments early, inviting useful feedback, and letting the work get better in the open.</p>
          </div>
          <div className={styles.infoBlock}>
            <span className={styles.number}>02</span>
            <h2>Shipping with care</h2>
            <p>Turning ambiguous ideas into focused, accessible experiences that are ready for real use.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
