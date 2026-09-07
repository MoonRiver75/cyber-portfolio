export default function Hero() {
  return (
    <section className="container-cyber relative py-24 text-center md:py-32">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(0,255,255,0.08)_0%,transparent_60%)]"
        aria-hidden="true"
      />

      <p className="tech-badge mb-6 inline-block animate-pulse">
        ● SYSTEM ONLINE
      </p>

      <h1 className="glitch-text font-display text-5xl font-black uppercase tracking-tight text-cyber-text md:text-7xl">
        Building the{' '}
        <span className="text-cyber-cyan">Neural</span>{' '}
        <span className="text-cyber-magenta">Future</span>
      </h1>

      <p className="mx-auto mt-6 max-w-xl font-body text-base text-cyber-textSecondary md:text-lg">
        Senior AI Engineer&nbsp;|&nbsp;LLMs, PyTorch &amp; MLOps
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <a href="#projects" className="btn-primary">
          View My Work
        </a>
        <a href="#contact" className="btn-secondary">
          Download Resume
        </a>
      </div>

      <div className="container-cyber mt-16 grid grid-cols-3 gap-4 font-body text-xs text-cyber-textSecondary md:max-w-2xl">
        {[
          ['5+', 'Years Experience'],
          ['20+', 'Models Deployed'],
          ['99.9%', 'Uptime'],
        ].map(([value, label]) => (
          <div key={label} className="border-cyber-thin px-2 py-4">
            <div className="font-display text-xl font-bold text-cyber-cyan md:text-2xl">
              {value}
            </div>
            <div className="mt-1 uppercase tracking-wider">{label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}