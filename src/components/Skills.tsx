const skillGroups = [
  {
    code: '[AI_GOVERNANCE]',
    icon: 'policy',
    title: 'AI Strategy & Governance',
    accent: '#00fbfb',
    tags: ['RAG System Architecture', 'LLM-as-a-Judge Evaluation', 'Huawei & Meta Vendor Ops', 'Enterprise Change Mgmt', 'AI Risk & Security Compliance', 'Product Lifecycle & Roadmaps'],
    footer: 'EXECUTIVE CO-PILOTING',
  },
  {
    code: '[LANGUAGES]',
    icon: 'code_blocks',
    title: 'Core Programming',
    accent: '#ffabf3',
    tags: ['Python (Async, FastAPI, PyTorch)', 'C# (.NET Core, Unity Engine)', 'Java (Enterprise Backend)', 'SQL (PostgreSQL, DuckDB)', 'JavaScript / TypeScript', 'C++ (Optimization & Math)'],
    footer: 'MULTI-PARADIGM ENGINES',
  },
  {
    code: '[INFRASTRUCTURE]',
    icon: 'cloud_sync',
    title: 'Cloud & Distributed',
    accent: '#2ae500',
    tags: ['Amazon Web Services (Bedrock)', 'Google Cloud Platform', 'Microsoft Azure Cloud', 'Docker & Containerization', 'Kubernetes Orchestration', 'Databricks Data Lakehouse'],
    footer: 'HIGH-AVAILABILITY CLUSTERS',
  },
  {
    code: '[TOOLS_ECOSYSTEM]',
    icon: 'terminal',
    title: 'Tooling & Modeling',
    accent: '#00fbfb',
    tags: ['Copilot Studio & Pro', 'NotebookLM & Obsidian', 'Ollama & LM Studio (Local LLMs)', 'Scikit-Learn & Vector Stores', 'Figma & Interactive Prototyping', 'PlantUML & Mermaid Architecture'],
    footer: 'FULL-CYCLE MLOPS STACK',
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full scroll-mt-24 border-b border-surface-light px-4 py-16 lg:px-8 lg:py-24"
    >
      <div className="container-cyber flex flex-col gap-10">
        <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-end">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 font-code text-[12px] font-medium uppercase tracking-widest text-tertiary-fixed-dim">
              <span className="h-2 w-2 bg-tertiary-fixed-dim" />
              <span>// 03_CAPABILITIES_MATRIX</span>
            </div>
            <h2 className="font-headline-lg uppercase tracking-tight text-primary">
              Technical &amp; Strategic Arsenal
            </h2>
          </div>
          <div className="font-code text-[10px] font-bold text-outline">
            STACK TELEMETRY // SYSTEM CAPABILITIES
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div
              key={group.code}
              className="flex flex-col justify-between gap-4 bg-surface p-4"
              style={{ border: `1px solid ${group.accent}40` }}
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between border-b border-surface-light pb-1">
                  <span className="font-code text-[10px] font-bold uppercase" style={{ color: group.accent }}>
                    {group.code}
                  </span>
                  <span className="material-symbols-outlined text-[18px]" style={{ color: group.accent }}>
                    {group.icon}
                  </span>
                </div>
                <h4 className="font-headline-sm text-[18px] uppercase text-primary">{group.title}</h4>
                <ul className="flex list-none flex-col gap-1.5 font-code text-[13px] text-on-surface-variant">
                  {group.tags.map((tag) => (
                    <li key={tag} className="flex items-center gap-1">
                      <span style={{ color: group.accent }}>&gt;</span> {tag}
                    </li>
                  ))}
                </ul>
              </div>
              <span
                className="w-max bg-surface-container-low px-2 py-0.5 font-code text-[10px]"
                style={{ color: group.accent }}
              >
                {group.footer}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}