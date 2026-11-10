export type SkillLevel = 'proficient' | 'familiar' | 'to-learn'

export type SkillItem = {
  id: string
  name: string
  icon: string
  color: string
}

export type SkillCategory = {
  id: SkillLevel
  label: string
  emoji: string
  accent: string
  items: SkillItem[]
}

type SkillGroup = {
  label: string
  accent: string
  skillIds: string[]
}

const skillCatalog: Record<string, SkillItem> = {
  // Programming Languages
  python: { id: 'python', name: 'Python', icon: '🐍', color: '#4cc9f0' },
  sql: { id: 'sql', name: 'SQL', icon: '🗃️', color: '#6ee7b7' },
  bash: { id: 'bash', name: 'Bash', icon: '💻', color: '#fbbf24' },
  java: { id: 'java', name: 'Java', icon: '☕', color: '#f59e0b' },
  javascript: { id: 'javascript', name: 'JavaScript', icon: '🟨', color: '#fbbf24' },
  rust: { id: 'rust', name: 'Rust', icon: '🦀', color: '#fb7185' },
  scala: { id: 'scala', name: 'Scala', icon: '🪜', color: '#7b1f1f' },
  kotlin: { id: 'kotlin', name: 'Kotlin', icon: '🟣', color: '#c084fc' },
  julia: { id: 'julia', name: 'Julia', icon: '📐', color: '#f472b6' },
  go: { id: 'go', name: 'Go', icon: '🦫', color: '#67e8f9' },
  elixir: { id: 'elixir', name: 'Elixir', icon: '💧', color: '#a78bfa' },

  // Data Engineering & Analytics
  dbt: { id: 'dbt', name: 'DBT', icon: '📊', color: '#c7591d' },
  postgresql: { id: 'postgresql', name: 'PostgreSQL', icon: '🐘', color: '#60a5fa' },
  ai: { id: 'ai', name: 'AI', icon: '🧠', color: '#a78bfa' },
  
  // Cloud & Infrastructure
  awsCloud: { id: 'awsCloud', name: 'AWS Cloud', icon: '☁️', color: '#fbbf24' },
  gcpCloud: { id: 'gcpCloud', name: 'GCP Cloud', icon: '🌐', color: '#38bdf8' },
  linux: { id: 'linux', name: 'Linux', icon: '🐧', color: '#94a3b8' },
  docker: { id: 'docker', name: 'Docker', icon: '🐳', color: '#38bdf8' },
  kubernetes: { id: 'kubernetes', name: 'Kubernetes', icon: '☸️', color: '#93c5fd' },
  iot: { id: 'iot', name: 'IoT', icon: '📡', color: '#22c55e' },
  embeddedSystems: { id: 'embeddedSystems', name: 'Embedded Systems', icon: '🛰️', color: '#f59e0b' },
  systemDesign: { id: 'systemDesign', name: 'System Design', icon: '🧩', color: '#f472b6' },
  robotics: { id: 'robotics', name: 'Robotics', icon: '🤖', color: '#c1c0be' },

  // Frameworks & Platforms
  fastapi: { id: 'fastapi', name: 'FastAPI', icon: '⚡', color: '#60a5fa' },
  android: { id: 'android', name: 'Android', icon: '📱', color: '#34d399' },
  snowflake: { id: 'snowflake', name: 'Snowflake', icon: '❄️', color: '#7dd3fc' },
  databricks: { id: 'databricks', name: 'Databricks', icon: '🟩', color: '#22c55e' },
  kafka: { id: 'kafka', name: 'Kafka', icon: '📡', color: '#60a5fa' },
  airflow: { id: 'airflow', name: 'Airflow', icon: '🛫', color: '#a78bfa' },
  flink: { id: 'flink', name: 'Apache Flink', icon: '🌊', color: '#38bdf8' },
  cassandra: { id: 'cassandra', name: 'Cassandra', icon: '🧬', color: '#34d399' },
  spark: { id: 'spark', name: 'Spark', icon: '⚡', color: '#fbbf24' },
}

const skillLevelMeta: Record<SkillLevel, { label: string; emoji: string; accent: string; skillIds: string[] }> = {
  proficient: {
    label: 'Proficient',
    emoji: '✨',
    accent: '#4cc9f0',
    skillIds: ['python', 'sql', 'bash', 'java', 'dbt', 'ai', 'postgresql', 'awsCloud', 'gcpCloud', 'linux', 'spark','kafka']
  },
  familiar: {
    label: 'Familiar',
    emoji: '🌌',
    accent: '#a78bfa',
    skillIds: ['javascript', 'rust', 'scala', 'kotlin', 'julia', 'android', 'fastapi', 'docker', 'kubernetes', 'snowflake', 'databricks',  'airflow']
  },
  'to-learn': {
    label: 'To learn',
    emoji: '🔭',
    accent: '#f9a8d4',
    skillIds: ['go', 'elixir', 'flink', 'cassandra', 'systemDesign', 'embeddedSystems', 'iot', 'robotics']
  }
}

const skillGroupsByCategoryMeta: SkillGroup[] = [
  {
    label: 'Data & Analytics',
    accent: '#7dd3fc',
    skillIds: ['python', 'sql', 'dbt', 'postgresql', 'snowflake', 'databricks', 'ai', 'mlops', 'kafka', 'flink', 'llmPipelines', 'julia']
  },
  {
    label: 'Cloud & Infrastructure',
    accent: '#fbbf24',
    skillIds: ['awsCloud', 'gcpCloud', 'linux', 'docker', 'kubernetes', 'bash', 'java', 'systemDesign', 'airflow']
  },
  {
    label: 'Languages & Development',
    accent: '#c084fc',
    skillIds: ['javascript', 'scala', 'rust', 'kotlin', 'fastapi', 'go', 'elixir', 'embeddedSystems', 'iot', 'cassandra', 'robotics']
  }
]

const toSkillItems = (skillIds: string[]) => skillIds.map((skillId) => skillCatalog[skillId]).filter(Boolean)

export const skillCategories: SkillCategory[] = (Object.entries(skillLevelMeta) as [SkillLevel, typeof skillLevelMeta[SkillLevel]][]).map(
  ([id, meta]) => ({
    id,
    label: meta.label,
    emoji: meta.emoji,
    accent: meta.accent,
    items: toSkillItems(meta.skillIds)
  })
)

export const skillGroupsByCategory = skillGroupsByCategoryMeta.map((group) => ({
  label: group.label,
  accent: group.accent,
  items: toSkillItems(group.skillIds)
}))

export const mySetupTools = [
  { name: 'Herdr', icon: '🐐', color: '#3872cb' },
  { name: 'Emacs', icon: '😈', color: '#a76bdb' },
  { name: 'Neovim', icon: '🧙🏻‍♂️', color: '#55b620' },
  { name: 'Obsidian', icon: '📝', color: '#6a469d' },
  { name: 'Claude Code', icon: '🤖', color: '#f97316' },
  { name: 'Spotify', icon: '🎸', color: '#45db3a' },
  { name: 'Hermes', icon: '👩🏾‍💻', color: '#392936' }
]
