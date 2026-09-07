type Project = {
  sysId: string
  title: string
  role: string
  period: string
  impact: string
  description: string
  tags: string[]
}

const projects: Project[] = [
  {
    sysId: 'RAG-AUDIT-2026',
    title: 'Telecommunications Audit & CV RAG',
    role: 'Field Auditor | AI Assistant',
    period: '2026',
    impact: 'SCALE: 2K → 27K/MO',
    description:
      'Auditing field technician "actas" and validation documents. Built an ingestion pipeline parsing JSON telemetry (Jitter, RSSI, optical power), cross-referencing corporate policy in an isolated vector RAG system with image and geolocation Computer Vision verification. Scaled system capacity from 2,000 to 27,000 monthly queries; prevented widespread fraud and automated escalation pathways.',
    tags: ['RAG', 'Mobile App', 'Computer Vision', 'Geolocation', 'Telemetry', 'Audit'],
  },
  {
    sysId: 'XVIEW-WA-AGENT',
    title: 'WhatsApp TV Support AI Agent',
    role: 'XVIEW+ AI Assistant',
    period: '2025 - 2026',
    impact: 'USERS: 125,000/MO',
    description:
      'Production conversational solution mapped across 29 customer intents in 1.5 months. Integrated AWS Generative Language Models with WhatsApp Business API, Huawei partnership frameworks, and rigorous LLM-as-a-Judge evaluations. Achieved 60-65% auto-resolution rate, containing 75,000+ inquiries monthly with seamless click-to-call human fallback.',
    tags: ['NLP', 'AWS Bedrock', 'WhatsApp API', 'Huawei', 'LLM-as-a-Judge'],
  },
  {
    sysId: 'VOICE-SIM-2026',
    title: 'AI Call-Center Voice Training Simulator',
    role: 'Real-Time Voice Simulation & MLOps',
    period: '2026',
    impact: 'RETENTION: +50/MO',
    description:
      'Engineered an AWS serverless architecture (Bedrock, S3, DuckDB, DeepDub, API Gateway WebSocket) with dynamic prompt generation across diverse customer personas and fatal-error policy detection. Reduced operational staff turnover by 50 agents per month; cut training time from 4 weeks to 8 days with live scoring.',
    tags: ['AWS Bedrock', 'WebSocket', 'DuckDB', 'DeepDub', 'Serverless'],
  },
  {
    sysId: 'MEGAN-ENT-2026',
    title: "Megan - Enterprise AI Assistant",
    role: 'Internal Copilot & Corporate Intelligence',
    period: '2026 - Active',
    impact: 'CORE::ENTERPRISE_RAG',
    description:
      'Product Management of an internal generative copilot combining proprietary RAG architectures with distributed local LLMs (Ollama / vLLM) for ultra-secure, air-gapped corporate document search, HR automation, and strategic synthesis. Empowering executive and operational tiers with sub-second verified knowledge retrieval under stringent data sovereignty.',
    tags: ['Enterprise PM', 'RAG Architecture', 'Local LLMs', 'Data Sovereignty'],
  },
  {
    sysId: 'CICESE-VR-STREET',
    title: 'VR Therapeutic Street Simulator',
    role: 'Unity Developer & Scrum Master',
    period: '2024 - 2025',
    impact: 'CLINICAL: 35+ CHILDREN',
    description:
      'Led Agile/Scrum development to create an immersive, low-anxiety VR simulation for autistic children to master street crossing and sensory management. Architected Unity C# physics with real-time geospatial telemetry and biometric analytics backends. Benefited 35+ children in clinical trials with measurable improvement in cognitive hazard identification.',
    tags: ['Scrum Master', 'Unity', 'VR', 'C#', 'PostgreSQL', 'Azure', 'Biometrics'],
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="container-cyber scroll-mt-24 py-16 md:py-24"
    >
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="tech-badge mb-3 inline-block">// 01_FEATURED_PRODUCTION_PROJECTS</p>
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-cyber-text md:text-4xl">
            Neural <span className="text-cyber-magenta">Systems</span>
          </h2>
          <p className="mt-2 font-body text-xs text-cyber-textSecondary">
            SCOPE: 5 PRODUCTION GRADE DEPLOYMENTS
          </p>
        </div>
        <p className="hidden font-body text-xs text-cyber-textSecondary md:block">
          [ SELECTED_WORK ]
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article key={project.sysId} className="card-cyber flex flex-col">
            <div className="mb-4 flex items-center justify-between border-b border-cyber-cyan/20 pb-3">
              <h3 className="font-display text-base font-bold leading-snug text-cyber-cyan">
                {project.title}
              </h3>
              <span className="shrink-0 pl-2 font-body text-[0.6rem] text-cyber-textSecondary">
                [SYS_ID: {project.sysId}]
              </span>
            </div>

            <p className="mb-1 font-body text-xs font-bold uppercase tracking-wider text-cyber-magenta">
              {project.role} ({project.period})
            </p>

            <p className="mb-3 font-body text-[0.65rem] text-cyber-green">
              &gt; IMPACT: {project.impact}
            </p>

            <p className="mb-5 flex-1 font-body text-sm leading-relaxed text-cyber-textSecondary">
              {project.description}
            </p>

            <div className="mb-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="tech-badge">
                  {tag}
                </span>
              ))}
            </div>

            <a
              href="#contact"
              className="font-display text-xs font-bold uppercase tracking-[0.12em] text-cyber-magenta transition-all duration-300 hover:pl-2 hover:text-cyber-cyan hover:[text-shadow:0_0_20px_rgba(0,255,255,0.4)]"
            >
              Learn More&nbsp;&rsaquo;&rsaquo;
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}