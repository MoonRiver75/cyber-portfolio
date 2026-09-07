type Role = {
  title: string
  company: string
  location: string
  period: string
  status?: string
  highlights: string[]
}

const roles: Role[] = [
  {
    title: 'AI Project Manager & Implementation Engineer',
    company: 'MEGACABLE',
    location: 'Guadalajara, Jalisco, Mexico',
    period: '2025 - Present',
    status: 'ACTIVE',
    highlights: [
      'Steering end-to-end AI portfolio serving 150,000+ monthly users, reporting directly to the Chief AI Officer (CAIO).',
      'Leading multi-disciplinary squads across conversational engineering, computer vision auditing, and automated voice simulation.',
      'Evaluating Oracle Fusion Cloud HCM updates, generative risk controls, and multi-cloud security compliance.',
      'Spearheading Vibecoding practices, rapid prototyping, and high-velocity Agile sprints for LLM pipeline iteration.',
      'Driving enterprise rollouts of Microsoft Copilot Pro, NotebookLM, and internal fine-tuned knowledge systems.',
    ],
  },
  {
    title: 'State Technology Advisor & Innovation Coordinator',
    company: 'GOVERNMENT OF NAYARIT',
    location: 'Tepic, Nayarit, Mexico',
    period: '2024 - 2025',
    highlights: [
      'Secured $100,000+ MXN in competitive state technology innovation grants.',
      'Coordinated state-wide educational modernization programs impacting 100,000+ students and youth through STEM initiatives, digital access centers, and community robotics workshops.',
    ],
  },
  {
    title: 'Video Game Designer, Scrum Master & Software Engineer',
    company: 'CICESE - UNIDAD DE TRANSFERENCIA TECNOLÓGICA (UAT)',
    location: '',
    period: '2024 - 2025',
    highlights: [
      'Facilitated Agile ceremonies as Scrum Master for cross-functional developers and researchers.',
      'Engineered virtual reality therapeutic architectures in C# and Unity, integrating biometric sensors and real-time behavioral data pipelines.',
    ],
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="container-cyber scroll-mt-24 py-16 md:py-24"
    >
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="tech-badge mb-3 inline-block">// 02_ENTERPRISE_CHRONOLOGY</p>
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-cyber-text md:text-4xl">
            Professional <span className="text-cyber-cyan">Experience</span>
          </h2>
        </div>
        <p className="hidden font-body text-xs text-cyber-textSecondary md:block">
          [ EXECUTIVE_GOVERNANCE ]
        </p>
      </div>

      <ol className="relative space-y-10 border-l-2 border-cyber-cyan/20 pl-8">
        {roles.map((role) => (
          <li key={role.company} className="relative">
            <span
              className="absolute -left-[41px] top-1 h-4 w-4 border border-cyber-cyan bg-cyber-bg shadow-neon-cyan"
              aria-hidden="true"
            />
            <div className="card-cyber">
              <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-display text-base font-bold uppercase text-cyber-text md:text-lg">
                  {role.title}
                </h3>
                {role.status && (
                  <span className="tech-badge text-cyber-green">
                    [ {role.status} ]
                  </span>
                )}
              </div>
              <p className="mb-4 font-body text-xs uppercase tracking-wider text-cyber-magenta">
                {role.company}
                {role.location && ` // ${role.location}`} &nbsp;·&nbsp; {role.period}
              </p>
              <ul className="space-y-2 font-body text-sm leading-relaxed text-cyber-textSecondary">
                {role.highlights.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-cyber-green">&gt;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <div className="card-cyber mt-10 border-cyber-magenta/30">
        <p className="mb-2 font-body text-xs uppercase tracking-wider text-cyber-magenta">
          [ ACADEMIC_EXCELLENCE // DISTINCTION ]
        </p>
        <h3 className="font-display text-base font-bold uppercase text-cyber-text md:text-lg">
          Universidad Autonoma de Nayarit
        </h3>
        <p className="mt-1 font-body text-sm text-cyber-textSecondary">
          B.Sc. Computational Systems Engineering — Graduated with a perfect
          GPA 4.0 / 100%
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {['Golden Key Honours Scholar', 'Top-ranked departmental capstone'].map((t) => (
            <span key={t} className="tech-badge">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}