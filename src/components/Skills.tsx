const skillGroups = [
  {
    code: '[AI_GOVERNANCE]',
    label: 'strategy',
    title: 'AI Strategy & Governance',
    skills: [
      'RAG System Architecture',
      'LLM-as-a-Judge Evaluation',
      'Huawei & Meta Vendor Ops',
      'Enterprise Change Mgmt',
      'AI Risk & Security Compliance',
      'Product Lifecycle & Roadmaps',
    ],
  },
  {
    code: '[LANGUAGES]',
    label: 'code_blocks',
    title: 'Core Programming',
    skills: [
      'Python (Async, FastAPI, PyTorch)',
      'C# (.NET Core, Unity Engine)',
      'Java (Enterprise Backend)',
      'SQL (PostgreSQL, DuckDB)',
      'JavaScript / TypeScript',
      'C++ (Optimization & Math)',
    ],
  },
  {
    code: '[INFRASTRUCTURE]',
    label: 'cloud_sync',
    title: 'Cloud & Distributed',
    skills: [
      'Amazon Web Services (Bedrock)',
      'Google Cloud Platform',
      'Microsoft Azure Cloud',
      'Docker & Containerization',
      'Kubernetes Orchestration',
      'Databricks Data Lakehouse',
    ],
  },
  {
    code: '[TOOLS_ECOSYSTEM]',
    label: 'terminal',
    title: 'Tooling & Modeling',
    skills: [
      'Copilot Studio & Pro',
      'NotebookLM & Obsidian',
      'Ollama & LM Studio (Local LLMs)',
      'Scikit-Learn & Vector Stores',
      'Figma & Interactive Prototyping',
      'PlantUML & Mermaid Architecture',
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="container-cyber scroll-mt-24 py-16 md:py-24">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="tech-badge mb-3 inline-block">// 03_CAPABILITIES_MATRIX</p>
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-cyber-text md:text-4xl">
            Technical <span className="text-cyber-green">Arsenal</span>
          </h2>
          <p className="mt-2 font-body text-xs text-cyber-textSecondary">
            STACK TELEMETRY // SYSTEM CAPABILITIES
          </p>
        </div>
        <p className="hidden font-body text-xs text-cyber-textSecondary md:block">
          [ MULTI-PARADIGM ENGINES ]
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {skillGroups.map((group) => (
          <article key={group.code} className="card-cyber">
            <div className="mb-4 flex items-center justify-between border-b border-cyber-cyan/20 pb-3">
              <h3 className="font-display text-sm font-bold uppercase text-cyber-cyan md:text-base">
                {group.title}
              </h3>
              <span className="shrink-0 pl-2 font-body text-[0.6rem] text-cyber-textSecondary">
                {group.code}
              </span>
            </div>
            <ul className="grid grid-cols-1 gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-2 font-body text-sm text-cyber-textSecondary"
                >
                  <span className="text-cyber-green" aria-hidden="true">
                    {group.label === 'terminal' ? '>_' : '>'}
                  </span>
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}