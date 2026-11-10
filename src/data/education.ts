export type EducationItem = {
  institution: string
  degree: string
  period: string
  location: string
  description: string
  focus: string[]
  highlights: string[]
}

export type CertificationItem = {
  name: string
  issuer: string
  period: string
  credential: string
  description: string
  focus: string[]
}

export const education: EducationItem[] = [
  {
    institution: 'Planned university',
    degree: 'Master of Applied Mathematics',
    period: '2028 - 2030',
    location: 'Future / to be defined',
    description:
      'A planned graduate program focused on advanced mathematical modeling, computational methods, and data-driven problem solving for complex systems.',
    focus: ['Applied Mathematics', 'Computational Modeling', 'Data Analysis'],
    highlights: [
      'I plan to deepen my understanding of mathematical optimization and modeling.',
      'I want to apply advanced quantitative methods to real-world engineering and data challenges.',
      'This degree will support my interest in research, systems thinking, and computational problem solving.'
    ]
  },
  {
    institution: 'Universidad Nacional de Colombia',
    degree: 'Systems and Computing Engineering',
    period: '2020 - 2026',
    location: 'Medellín, Colombia',
    description:
      'Focused on systems design, software engineering, distributed systems, and applied research with a strong emphasis on building practical, real-world solutions.',
    focus: ['Systems Design', 'Software Engineering', 'Distributed Systems', 'Applied Research', 'Data Engineering', 'Cloud Computing'],
    highlights: [
      'Built technical projects combining software, data, and systems thinking.',
      'Explored computational modeling, infrastructure, and engineering problem solving.',
      'Developed a strong foundation in structured analysis, architecture, and applied research.'
    ]
  },
  {
    institution: 'SENA',
    degree: 'Web Development and Programming',
    period: '2016 - 2017',
    location: 'Medellín, Colombia',
    description:
      'A technical degree covering front-end development, programming fundamentals, backend development, and web design principles.',
    focus: ['Web Development', 'Programming', 'Web Design', 'User Experience'],
    highlights: [
      'Learned core programming patterns and modern web development practices.',
      'Built projects that connected user experience and technical implementation.',
      'Strengthened the habit of learning by building and iterating quickly.'
    ]
  }
]

export const certifications: CertificationItem[] = [
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    period: '2024',
    credential: 'Foundational Cloud Certification',
    description:
      'Focused on core cloud services, architecture principles, security, pricing, billing, and the AWS ecosystem.',
    focus: ['AWS', 'Cloud', 'Security', 'Architecture']
  },
]
