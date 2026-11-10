import { useEffect, useState } from 'react'
import { experiences, type ExperienceItem } from '../../data/experience'
import styles from './Experience.module.css'

function Experience() {
  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null)

  useEffect(() => {
    document.body.style.overflow = selectedExperience ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedExperience])

  return (
    <section className={styles.section} aria-labelledby="experience-title">
      <div className={styles.card}>
        <p className={styles.eyebrow}>The path so far</p>
        <h1 id="experience-title" className={styles.title}>The journey</h1>
        <p className={styles.description}>
          A personal collection of my professional experiences
        </p>

        <div className={styles.timeline} aria-label="Work experience timeline">
          {experiences.map((job, index) => (
            <article
              key={`${job.company}-${job.role}`}
              className={`${styles.timelineEntry} ${index % 2 === 0 ? styles.left : styles.right}`}
            >
              <button
                type="button"
                className={styles.jobButton}
                onClick={() => setSelectedExperience(job)}
                aria-label={`Open details for ${job.role} at ${job.company}`}
              >
                <span className={styles.jobType}>{job.type}</span>
                <div className={styles.jobHeader}>
                  <div>
                    <p className={styles.jobPeriod}>{job.period}</p>
                    <h2>{job.role}</h2>
                  </div>
                </div>
                <p className={styles.jobCompany}>{job.company}</p>
                <p className={styles.jobLocation}>{job.location}</p>
                <p className={styles.jobSummary}>{job.summary}</p>
              </button>
            </article>
          ))}
        </div>
      </div>

      {selectedExperience && (
        <div className={styles.modalOverlay} onClick={() => setSelectedExperience(null)}>
          <div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="experience-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className={styles.modalClose}
              aria-label="Close experience details"
              onClick={() => setSelectedExperience(null)}
            >
              ✘
            </button>

            <p className={styles.modalMeta}>{selectedExperience.period} • {selectedExperience.location}</p>
            <h3 id="experience-modal-title" className={styles.modalTitle}>{selectedExperience.role}</h3>
            <p className={styles.modalCompany}>{selectedExperience.company}</p>
            <p className={styles.modalSummary}>{selectedExperience.summary}</p>

            <div className={styles.modalSection}>
              <h4>Highlights</h4>
              <ul className={styles.highlightList}>
                {selectedExperience.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>

            <div className={styles.modalSection}>
              <h4>Stack</h4>
              <div className={styles.stackList}>
                {selectedExperience.stack.map((item) => (
                  <span key={item} className={styles.stackItem}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Experience
