import styles from './Blog.module.css'

function Blog() {
  return (
    <section className={styles.section} aria-labelledby="blog-title">
      <div className={styles.card}>
        <p className={styles.eyebrow}>Notes from the desk</p>
        <h1 id="blog-title" className={styles.title}>Small thoughts on making things well.</h1>
        <p className={styles.description}>Short essays about frontend craft, design decisions, and the details that make digital work feel human.</p>
        <div className={styles.grid}>
          <article className={styles.infoBlock}>
            <span className={styles.number}>01</span>
            <h2>Designing with constraints</h2>
            <p>Why a smaller set of intentional choices often makes a product clearer and more memorable.</p>
          </article>
          <article className={styles.infoBlock}>
            <span className={styles.number}>02</span>
            <h2>The useful middle</h2>
            <p>Notes on finding the balance between a quick prototype and a system people can rely on.</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Blog
