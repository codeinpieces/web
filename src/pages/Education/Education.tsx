import { useState } from 'react'
import { certifications, education } from '../../data/education'
import styles from './Education.module.css'

const linkedInCertificationsUrl = 'https://www.linkedin.com/in/codeinpieces/details/certifications/'

function Education() {
  const [activeTab, setActiveTab] = useState<'education' | 'certifications'>('education')

  const items = activeTab === 'education' ? education : certifications

  return (
    <section className={styles.section} aria-labelledby="education-title">
      <div className={styles.card}>
        <p className={styles.eyebrow}>The foundations</p>
        <h1 id="education-title" className={styles.title}>Education and certifications</h1>
        <p className={styles.description}>
          A living record of the studies, projects, and questions that shaped how I build and reason about systems.
        </p>

        <div className={styles.tabs} aria-label="Education and certifications tabs">
          <button
            type="button"
            className={`${styles.tab} ${activeTab === 'education' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('education')}
            aria-pressed={activeTab === 'education'}
          >
            Education
          </button>
          <button
            type="button"
            className={`${styles.tab} ${activeTab === 'certifications' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('certifications')}
            aria-pressed={activeTab === 'certifications'}
          >
            Certifications
          </button>
        </div>

        <div
          className={`${styles.list} ${activeTab === 'certifications' ? styles.certificationsList : ''}`}
          aria-label={activeTab === 'education' ? 'Education timeline' : 'Certification timeline'}
        >
          {items.map((item) => (
            <article key={`${('institution' in item ? item.institution : item.name)}-${item.period}`} className={styles.entry}>
              <div className={styles.meta}>
                <span className={styles.period}>{item.period}</span>
              </div>

              <div className={styles.content}>
                <h2>{'degree' in item ? item.degree : item.name}</h2>
                <p className={styles.institution}>{'institution' in item ? item.institution : item.issuer}</p>
                {'location' in item && <p className={styles.location}>{item.location}</p>}
                {'credential' in item && <p className={styles.credential}>{item.credential}</p>}
                <p className={styles.summary}>{item.description}</p>

                <div className={styles.focusList} aria-label={`${'degree' in item ? item.degree : item.name} focus areas`}>
                  {item.focus.map((tag) => (
                    <span key={tag} className={styles.focusPill}>{tag}</span>
                  ))}
                </div>

                {'highlights' in item && (
                  <ul className={styles.highlights}>
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}

          {activeTab === 'certifications' && (
            <div className={styles.ctaRow}>
              <a
                href={linkedInCertificationsUrl}
                target="_blank"
                rel="noreferrer"
                className={styles.ctaButton}
              >
                See more
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Education
