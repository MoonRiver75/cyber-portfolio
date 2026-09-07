type Role = {
  title: string
  company: string
  period: string
  badge?: string
  accent: string
  border: string
  description: string
  details?: { title: string; text: string; color: string }[]
}

const roles: Role[] = [
  {
    title: 'AI Project Manager & Implementation Engineer',
    company: 'MEGACABLE // Guadalajara, Jalisco, Mexico',
    period: '2025 - PRESENT // ACTIVE',
    badge: '[CURRENT]',
    accent: '#00fbfb',
    border: '#00fbfb',
    description:
      'Reporting directly to the Chief AI Officer (CAIO), steering the end-to-end artificial intelligence portfolio serving 150,000+ monthly users. Leading multi-disciplinary squads across conversational engineering, computer vision auditing, and automated voice simulation.',
    details: [
      {
        title: '> Enterprise Governance:',
        text: 'Evaluating Oracle Fusion Cloud HCM 26A/26B updates, generative risk controls, and multi-cloud security compliance.',
        color: '#00fbfb',
      },
      {
        title: '> Modern Methodology:',
        text: 'Spearheading Vibecoding practices, rapid prototyping, and high-velocity Agile sprints for LLM pipeline iteration.',
        color: '#ffabf3',
      },
      {
        title: '> Enterprise Adoption:',
        text: 'Driving corporate rollouts of Microsoft Copilot Pro, NotebookLM, and internal fine-tuned knowledge systems.',
        color: '#2ae500',
      },
    ],
  },
  {
    title: 'State Technology Advisor & Innovation Coordinator',
    company: 'GOVERNMENT OF NAYARIT // Tepic, Nayarit, Mexico',
    period: '2024 - 2025',
    accent: '#ffabf3',
    border: '#ffabf3',
    description:
      'Secured $100,000+ MXN in competitive state technology innovation grants. Coordinated state-wide educational and technological modernization programs, directly impacting 100,000+ students and youth through STEM initiatives, digital access centers, and community robotics workshops.',
  },
  {
    title: 'Video Game Designer, Scrum Master & Software Engineer',
    company: 'CICESE - UNIDAD DE TRANSFERENCIA TECNOLÓGICA (UAT)',
    period: '2024 - 2025',
    accent: '#2ae500',
    border: '#2ae500',
    description:
      'Facilitated Agile ceremonies as Scrum Master for cross-functional developers and researchers. Engineered virtual reality therapeutic architectures in C# and Unity, integrating biometric sensors and real-time behavioral data pipelines.',
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full scroll-mt-24 border-b border-surface-light bg-surface-container-lowest px-4 py-16 lg:px-8 lg:py-24"
    >
      <div className="container-cyber flex flex-col gap-10">
        <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-end">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 font-code text-[12px] font-medium uppercase tracking-widest text-secondary">
              <span className="h-2 w-2 bg-secondary" />
              <span>// 02_ENTERPRISE_CHRONOLOGY</span>
            </div>
            <h2 className="font-headline-lg uppercase tracking-tight text-primary">
              Professional Experience &amp; Leadership
            </h2>
          </div>
          <div className="font-code text-[10px] font-bold text-outline">
            EXECUTIVE GOVERNANCE &amp; IMPLEMENTATION TIMELINE
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {roles.map((role) => (
            <div
              key={role.company}
              className="flex flex-col gap-2 bg-surface p-6"
              style={{ borderLeft: `4px solid ${role.border}` }}
            >
              <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
                <div>
                  <h3 className="font-headline-sm uppercase text-primary">
                    {role.title}
                    {role.badge && (
                      <span
                        className="ml-2 border bg-surface-container-low px-1.5 py-0.5 font-code text-[10px] font-bold text-primary-fixed"
                        style={{ borderColor: 'rgba(0,251,251,0.3)' }}
                      >
                        {role.badge}
                      </span>
                    )}
                  </h3>
                  <span
                    className="font-code text-[12px] font-medium tracking-wider"
                    style={{ color: role.accent }}
                  >
                    {role.company}
                  </span>
                </div>
                <span
                  className="w-max border bg-surface-container-low px-3 py-1 font-code text-[10px] font-bold"
                  style={{ color: role.accent, borderColor: `${role.accent}40` }}
                >
                  {role.period}
                </span>
              </div>

              <p className="font-body-md leading-relaxed text-on-surface-variant">
                {role.description}
              </p>

              {role.details && (
                <div className="grid grid-cols-1 gap-2 pt-1 md:grid-cols-3">
                  {role.details.map((d) => (
                    <div key={d.title} className="border border-surface-light bg-surface-container-low p-2">
                      <span className="block font-code text-[10px] font-bold uppercase" style={{ color: d.color }}>
                        {d.title}
                      </span>
                      <span className="font-body-sm text-on-surface-variant">{d.text}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Education callout */}
          <div
            className="flex flex-col items-start justify-between gap-4 border bg-surface-container-low p-6 md:flex-row md:items-center"
            style={{ borderColor: 'rgba(0,251,251,0.3)' }}
          >
            <div className="flex flex-col gap-1">
              <span className="font-code text-[10px] font-bold uppercase tracking-widest text-primary-fixed">
                [ACADEMIC_EXCELLENCE // DISTINCTION]
              </span>
              <h4 className="font-headline-sm uppercase text-primary">
                Universidad Aut&oacute;noma de Nayarit &mdash; B.Sc. Computational Systems Engineering
              </h4>
              <p className="font-body-sm text-on-surface-variant">
                Graduated with a perfect{' '}
                <strong className="font-bold text-tertiary-fixed-dim">GPA 4.0 / 100%</strong> &bull;
                Golden Key Honours Scholar distinction &bull; Top-ranked departmental capstone honor.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="border border-primary-fixed/30 bg-surface-container px-3 py-1 font-code text-[10px] font-bold text-primary-fixed">
                AI GOVERNANCE CERTIFIED
              </span>
              <span className="border border-secondary/30 bg-surface-container px-3 py-1 font-code text-[10px] font-bold text-secondary">
                ENTERPRISE RISK MANAGEMENT
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}