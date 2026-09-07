const metrics = [
  ['150K+', 'Monthly Active Users'],
  ['60-65%', 'Auto Resolution'],
  ['75K+', 'Inquiries / Month'],
  ['13.5x', 'Query Scaling'],
  ['27K', 'Field Auditor Queries'],
  ['$100K+', 'MXN Grant Funding'],
]

export default function Hero() {
  return (
    <section className="container-cyber relative py-16 text-center md:py-24">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(0,255,255,0.08)_0%,transparent_60%)]"
        aria-hidden="true"
      />

      <p className="tech-badge mb-6 inline-block animate-pulse">
        ● ONLINE // NODE: GDL_MEX
      </p>

      <h1 className="glitch-text font-display text-4xl font-black uppercase tracking-tight text-cyber-text md:text-6xl">
        Building the{' '}
        <span className="text-cyber-cyan">Neural</span>{' '}
        <span className="text-cyber-magenta">Future</span>
      </h1>

      <p className="mx-auto mt-6 max-w-2xl font-body text-sm text-cyber-textSecondary md:text-base">
        AI Project Manager&nbsp;|&nbsp;AI Implementation Engineer&nbsp;|&nbsp;Software Engineer
      </p>

      <p className="mx-auto mt-4 max-w-2xl font-body text-sm leading-relaxed text-cyber-textSecondary md:text-base">
        Bridging the gap between enterprise AI strategy, corporate governance,
        and hands-on engineering. Currently driving AI transformation at
        Megacable serving{' '}
        <span className="text-cyber-cyan">150,000+ monthly users</span> across
        multi-agent generative systems, real-time RAG diagnostic engines, and
        high-concurrency telephony platforms.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <a href="#projects" className="btn-primary">
          View Key Projects
        </a>
        <a href="#contact" className="btn-secondary">
          Connect on Linkedin
        </a>
      </div>

      <div className="container-cyber mt-14 grid grid-cols-2 gap-3 font-body text-xs text-cyber-textSecondary sm:grid-cols-3 lg:grid-cols-6">
        {metrics.map(([value, label]) => (
          <div key={label} className="border-cyber-thin px-2 py-4">
            <div className="font-display text-lg font-bold text-cyber-cyan md:text-xl">
              {value}
            </div>
            <div className="mt-1 uppercase tracking-wider">{label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}