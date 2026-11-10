export type ExperienceItem = {
  company: string
  role: string
  period: string
  location: string
  type: string
  summary: string
  highlights: string[]
  stack: string[]
}

export const experiences: ExperienceItem[] = [
  {
    company: 'CI&T',
    role: 'Data Specialist',
    period: '2025 - Present',
    location: 'Remote',
    type: 'Data Engineering + Cloud Computing',
    summary:
      'Responsible for designing, implementing, and maintaining data pipelines and infrastructure to support data-driven decision-making processes',
    highlights: [
      'Create documentation for all data pipelines and processes, ensuring clarity and knowledge sharing within the team',
      'Create and maintain data pipelines, ensuring efficient data flow and processing for analytics and reporting',
      'Optimize data transformation processes, improving performance and reducing resource consumption',
      'Implement data quality checks and monitoring to ensure accuracy and reliability of data',
      'Create data applications to support processes and automate tasks, improving efficiency and reducing manual effort'
    ],
    stack: ['Python', 'GCP', 'DBT', 'Airflow', 'Airbyte', 'BigQuery', 'SQL', 'JavaScript', 'Docker', 'Kubernetes', 'Terraform']
  },
  {
    company: 'Universidad Nacional de Colombia',
    role: 'Platform Support Engineer',
    period: '2021 - 2023',
    location: 'Medellin',
    type: 'Support + Cloud Computing',
    summary:
      'Provided technical support and maintenance for university IT platforms, including managing servers, networks, and software systems.',
    highlights: [
      'Migrate the platform infraestructure, improving scalability and reliability.',
      'Manage updates for Enhance operational and cost efficiency',
      'Support the university community with technical issues and inquiries, ensuring smooth operation of IT services',
    ],
    stack: ['Python', 'GCP', 'Linux', 'Networking', 'Database Management']
  },
  
]
