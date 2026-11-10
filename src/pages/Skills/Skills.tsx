import { useState } from 'react'
import { mySetupTools, skillCategories, skillGroupsByCategory } from '../../data/skills'
import styles from './Skills.module.css'

type SkillGroupView = {
  id?: string
  label: string
  emoji?: string
  accent?: string
  items: Array<{ name: string; icon: string; color: string }>
}

function Skills() {
  const [view, setView] = useState<'category' | 'proficiency'>('category')

  const isCategoryView = view === 'category'
  const activeGroups: SkillGroupView[] = isCategoryView ? skillGroupsByCategory : skillCategories

  return (
    <section className={styles.section} aria-labelledby="skills-title">
      <div className={styles.card}>
        <p className={styles.eyebrow}>The tools I love</p>
        <h1 id="skills-title" className={styles.title}>The knowledge</h1>
        <p className={styles.description}>
          A compact map of the languages, platforms, and engineering habits I use most in practice and for personal projects
        </p>

        <div className={styles.tabs} aria-label="Skills view toggle">
          <button
            type="button"
            className={`${styles.tab} ${isCategoryView ? styles.activeTab : ''}`}
            onClick={() => setView('category')}
            aria-pressed={isCategoryView}
          >
            By category
          </button>
          <button
            type="button"
            className={`${styles.tab} ${!isCategoryView ? styles.activeTab : ''}`}
            onClick={() => setView('proficiency')}
            aria-pressed={!isCategoryView}
          >
            By proficiency
          </button>
        </div>

        <div className={isCategoryView ? styles.categoryGrid : styles.proficiencyGrid}>
          {activeGroups.map((group) => (
            <article
              key={group.id ?? group.label}
              className={isCategoryView ? styles.categoryCard : styles.proficiencyCard}
            >
              <div className={styles.categoryHeader}>
                <span className={styles.categoryEmoji} aria-hidden="true">
                  {group.emoji ?? '🗂️'}
                </span>
                <h2>{group.label}</h2>
              </div>

              <ul className={styles.skillList}>
                {group.items.map((skill) => (
                  <li
                    key={skill.name}
                    className={styles.skillItem}
                    style={{ '--skill-color': skill.color } as React.CSSProperties}
                  >
                    <span className={styles.skillIcon} aria-hidden="true">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className={styles.setupSection}>
          <div className={styles.setupHeader}>
            <span className={styles.setupEmoji} aria-hidden="true">⚙️</span>
            <h2>My setup</h2>
          </div>

          <ul className={styles.setupList}>
            {mySetupTools.map((tool) => (
              <li
                key={tool.name}
                className={styles.setupItem}
                style={{ '--tool-color': tool.color } as React.CSSProperties}
              >
                <span className={styles.setupIcon} aria-hidden="true">{tool.icon}</span>
                <span>{tool.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
export default Skills
