import ProjectSchematic from './ProjectSchematic'

type DiagramType = 'rag-audit' | 'whatsapp-agent' | 'voice-sim' | 'megan' | 'vr-street'

type Project = {
  sysId: string
  stats: string
  eyebrow: string
  title: string
  description: string
  impactLabel: string
  impact: string
  tags: string[]
  diagram: DiagramType
  accent: string
  border: string
  wide?: boolean
}

const projects: Project[] = [
  {
    sysId: 'RAG-AUDIT-2026',
    stats: 'SCALE: 2K → 27K/MO',
    eyebrow: '● TELECOMMUNICATIONS AUDIT & CV',
    title: 'RAG Field Auditor | AI Assistant (2026)',
    description:
      "Challenge & Architecture: Auditing field technician 'actas' and validation documents. Built an ingestion pipeline parsing JSON telemetry (Jitter, RSSI, optical power levels), cross-referencing corporate operational policy in an isolated vector RAG system with image and geolocation Computer Vision verification.",
    impactLabel: 'Quantified Impact:',
    impact:
      'Scaled system capacity from 2,000 to 27,000 monthly queries; prevented widespread fraud and automated escalation pathways.',
    tags: ['RAG', 'Mobile App', 'Computer Vision', 'Geolocation', 'Telemetry Audit'],
    diagram: 'rag-audit',
    accent: '#00fbfb',
    border: 'rgba(0,251,251,0.3)',
  },
  {
    sysId: 'XVIEW-WA-AGENT',
    stats: 'USERS: 125,000/MO',
    eyebrow: '● CONVERSATIONAL AI & TELCO SUPPORT',
    title: 'WhatsApp TV Support AI Agent (XVIEW+) (2025 - 2026)',
    description:
      'Challenge & Architecture: Production conversational solution mapped across 29 customer intents in 1.5 months. Integrated AWS Generative Language Models with WhatsApp Business API, Huawei partnership frameworks, and rigorous LLM-as-a-Judge evaluations.',
    impactLabel: 'Quantified Impact:',
    impact:
      '125,000 monthly users; achieved 60–65% auto-resolution rate, containing 75,000+ inquiries monthly with seamless click-to-call human fallback.',
    tags: ['NLP', 'AWS Bedrock/LLMs', 'WhatsApp API', 'Huawei Tech', 'LLM-as-a-Judge'],
    diagram: 'whatsapp-agent',
    accent: '#ffabf3',
    border: 'rgba(255,171,243,0.4)',
  },
  {
    sysId: 'VOICE-SIM-2026',
    stats: 'RETENTION: +50/MO',
    eyebrow: '● REAL-TIME VOICE SIMULATION & MLOPS',
    title: 'AI Call-Center Voice Training Simulator (2026)',
    description:
      'Challenge & Architecture: High call-center turnover and long onboarding cycles. Engineered an AWS serverless architecture (Bedrock, S3, DuckDB, DeepDub, API Gateway WebSocket) with dynamic prompt generation across diverse customer personas and fatal-error policy detection.',
    impactLabel: 'Quantified Impact:',
    impact:
      'Reduced operational staff turnover by 50 agents per month; cut training time from 4 weeks to 8 days with live scoring.',
    tags: ['AWS Bedrock', 'WebSocket', 'DuckDB', 'DeepDub', 'Serverless'],
    diagram: 'voice-sim',
    accent: '#2ae500',
    border: 'rgba(42,229,0,0.4)',
  },
  {
    sysId: 'MEGAN-ENT-2026',
    stats: 'CORE::ENTERPRISE_RAG',
    eyebrow: '● INTERNAL COPILOT & CORPORATE INTELLIGENCE',
    title: "'Megan' Enterprise AI Assistant (2026 - Active)",
    description:
      'Challenge & Architecture: Enterprise Product Management of internal generative copilot. Combines proprietary RAG architectures with distributed local LLMs (Ollama / vLLM) for ultra-secure, air-gapped corporate document search, HR automation, and strategic synthesis.',
    impactLabel: 'Strategic Impact:',
    impact:
      'Empowered executive and operational tiers with sub-second verified knowledge retrieval under stringent corporate data sovereignty.',
    tags: ['Enterprise PM', 'RAG Architecture', 'Local LLMs', 'Data Sovereignty'],
    diagram: 'megan',
    accent: '#00fbfb',
    border: 'rgba(0,251,251,0.3)',
  },
  {
    sysId: 'CICESE-VR-STREET',
    stats: 'CLINICAL: 35+ AUTISTIC CHILDREN',
    eyebrow: '● VR THERAPEUTIC ENVIRONMENT & SPATIAL COMPUTING',
    title: 'Street Simulator | VR Therapeutic Environment (2024 - 2025)',
    description:
      'Challenge & Architecture: Led Agile/Scrum development as Scrum Master and Software Engineer to create an immersive, low-anxiety VR simulation for autistic children to master street crossing and sensory management. Architected Unity C# physics with real-time geospatial telemetry tracking and Azure/PostgreSQL backend analytics.',
    impactLabel: 'Quantified Clinical Impact:',
    impact:
      'Benefited 35+ children in clinical trials; verified measurable improvement in cognitive hazard identification and autonomic composure.',
    tags: ['Scrum Master', 'Unity VR', 'C#', 'PostgreSQL', 'Azure Cloud', 'Biometric Analytics'],
    diagram: 'vr-street',
    accent: '#ffabf3',
    border: 'rgba(255,171,243,0.4)',
    wide: true,
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full scroll-mt-24 border-b border-surface-light px-4 py-16 lg:px-8 lg:py-24"
    >
      <div className="container-cyber flex flex-col gap-10">
        <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-end">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 font-code text-[12px] font-medium uppercase tracking-widest text-primary-fixed">
              <span className="h-2 w-2 bg-primary-fixed" />
              <span>// 01_FEATURED_PRODUCTION_PROJECTS</span>
            </div>
            <h2 className="font-headline-lg uppercase tracking-tight text-primary">
              Engineered AI Architectures &amp; Systems
            </h2>
          </div>
          <div className="flex items-center gap-2 border border-surface-light bg-surface-container px-3 py-1 font-code text-[10px] font-bold text-outline">
            <span className="inline-block h-2 w-2 animate-ping rounded-full bg-tertiary-fixed-dim" />
            <span>PORTFOLIO SCOPE: 5 PRODUCTION GRADE DEPLOYMENTS</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.sysId}
              className={`group relative flex flex-col justify-between bg-surface p-6 transition-all duration-300 hover:bg-surface-container ${
                project.wide ? 'md:col-span-2' : ''
              }`}
              style={{
                border: `1px solid ${project.border}`,
              }}
            >
              <div>
                <div className="mb-2 flex items-center justify-between bg-surface-container-low px-3 py-1">
                  <span
                    className="font-code text-[10px] font-bold"
                    style={{ color: project.accent }}
                  >
                    [SYS_ID: {project.sysId}]
                  </span>
                  <span className="font-code text-[10px] font-bold text-tertiary-fixed-dim">
                    {project.stats}
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <span
                    className="inline-block w-max bg-surface-container-low px-2 py-0.5 font-code text-[10px] font-bold uppercase tracking-wider"
                    style={{ color: project.accent }}
                  >
                    {project.eyebrow}
                  </span>
                  <h3 className="font-headline-sm uppercase transition-colors group-hover:text-primary-fixed">
                    {project.title}
                  </h3>

                  <ProjectSchematic type={project.diagram} />

                  <p className="font-body-sm leading-relaxed text-on-surface-variant">
                    {project.description}
                  </p>
                  <div
                    className="border-l-2 bg-surface-container-low p-2"
                    style={{ borderLeftColor: project.accent }}
                  >
                    <span
                      className="font-code text-[10px] font-bold uppercase"
                      style={{ color: project.accent }}
                    >
                      {project.impactLabel}
                    </span>
                    <p className="font-body-sm text-on-surface">{project.impact}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-1.5 py-0.5 font-code text-[10px] font-bold"
                      style={{ color: project.accent, backgroundColor: '#1c1b1b' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}