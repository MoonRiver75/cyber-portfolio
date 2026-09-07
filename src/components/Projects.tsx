type Project = {
  title: string
  description: string
  tags: string[]
}

const projects: Project[] = [
  {
    title: 'LlamaStack Orchestrator',
    description:
      'Distributed inference pipeline serving fine-tuned LLMs across a multi-GPU cluster with dynamic routing and auto-scaling.',
    tags: ['PyTorch', 'Ray', 'vLLM', 'Kubernetes'],
  },
  {
    title: 'Neural Foresight',
    description:
      'Time-series forecasting engine for energy grids using transformer architectures and probabilistic uncertainty estimation.',
    tags: ['PyTorch', 'Transformers', 'MLflow'],
  },
  {
    title: 'RAG Fusion Platform',
    description:
      'Enterprise retrieval-augmented generation stack with hybrid search, streaming answers, and guardrail evaluation pipelines.',
    tags: ['LLMs', 'LangChain', 'Elasticsearch', 'Docker'],
  },
  {
    title: 'ModelMesh Autodrift',
    description:
      'Continuous monitoring harness that detects data and concept drift in production models with automated retraining triggers.',
    tags: ['MLOps', 'Docker', 'Kafka', 'Prometheus'],
  },
  {
    title: 'PromptForge Studio',
    description:
      'Versioned prompt engineering workbench with A/B evaluation, regression testing, and cost-aware optimization analytics.',
    tags: ['LLMs', 'React', 'FastAPI'],
  },
  {
    title: 'GigaTune',
    description:
      'Distributed hyperparameter search over thousands of trials using Bayesian optimization and early-stopping heuristics.',
    tags: ['Python', 'PyTorch', 'Optuna', 'Ray'],
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
          <p className="tech-badge mb-3 inline-block">// PROJECTS</p>
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-cyber-text md:text-4xl">
            Neural <span className="text-cyber-magenta">Systems</span>
          </h2>
        </div>
        <p className="hidden font-body text-xs text-cyber-textSecondary md:block">
          [ SELECTED_WORK: 06 ]
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <article key={project.title} className="card-cyber flex flex-col">
            <div className="mb-4 flex items-center justify-between border-b border-cyber-cyan/20 pb-3">
              <h3 className="font-display text-lg font-bold text-cyber-cyan">
                {project.title}
              </h3>
              <span className="font-body text-[0.65rem] text-cyber-textSecondary">
                SYS_{String(i + 1).padStart(3, '0')}
              </span>
            </div>

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