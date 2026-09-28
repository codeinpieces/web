import styles from './Education.module.css'

function Education() {
  return (
    <section className={styles.section} aria-labelledby="education-title">
      <div className={styles.card}>
        <p className={styles.eyebrow}>The foundation</p>
        <h1 id="education-title" className={styles.title}>Education that stays practical.</h1>
        <p className={styles.description}>A living record of the courses, experiments, and questions that sharpen how I build for the web.</p>
        <div className={styles.grid}>
          <div className={styles.infoBlock}>
            <span className={styles.number}>01</span>
            <h2>In progress</h2>
            <p>Building a portfolio that makes the work easy to explore and hard to forget.</p>
          </div>
          <div className={styles.infoBlock}>
            <span className={styles.number}>02</span>
            <h2>Always learning</h2>
            <p>Keeping the process open, experimental, and grounded in real people.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
