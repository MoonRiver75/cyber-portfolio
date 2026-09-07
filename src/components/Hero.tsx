function GlitchLine({
  text,
  className = '',
  primary,
  secondary,
}: {
  text: string
  className?: string
  primary: string
  secondary: string
}) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{text}</span>
      <span
        className="glitch-layer absolute -top-[1px] -left-[2px] opacity-70"
        style={{ color: primary }}
      >
        {text}
      </span>
      <span
        className="glitch-layer absolute top-[1px] left-[2px] opacity-70"
        style={{ color: secondary }}
      >
        {text}
      </span>
    </span>
  )
}

const pills = [
  { text: '[150K+ MONTHLY USERS]', color: '#00fbfb', border: 'rgba(0,251,251,0.3)', glow: 'rgba(0,251,251,0.2)', pulse: false },
  { text: '[60-65% AUTO RESOLUTION]', color: '#ffabf3', border: 'rgba(254,0,254,0.3)', glow: 'rgba(254,0,254,0.2)', pulse: false },
  { text: '[RAG & LLM-AS-A-JUDGE]', color: '#2ae500', border: 'rgba(42,229,0,0.3)', glow: 'rgba(42,229,0,0.25)', pulse: true },
  { text: '[VIBECODING & AGILE]', color: '#00fbfb', border: 'rgba(0,251,251,0.2)', glow: undefined, pulse: false },
  { text: '[AWS / GCP / AZURE]', color: '#ffd7f5', border: 'rgba(255,215,245,0.2)', glow: undefined, pulse: false },
]

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden border-b border-surface-light py-12 lg:py-20">
      <div className="dots-grid absolute inset-0 opacity-40" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary-fixed/5 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-secondary-container/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="container-cyber relative z-10 flex flex-col gap-10">
        {/* Diagnostic bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-l-2 border-primary-fixed bg-surface-container-low px-4 py-2">
          <div className="flex items-center gap-2 font-code text-[10px] font-bold uppercase tracking-widest text-primary-fixed">
            <span className="inline-block h-2 w-2 animate-ping bg-primary-fixed" />
            SYS.RUN // AI_TRANSFORMATION::MEGACABLE [ACTIVE_150K_USERS]
          </div>
          <div className="flex flex-wrap items-center gap-4 font-code text-[10px] font-bold text-outline">
            <span>LOC: GUADALAJARA, JALISCO, MX</span>
            <span className="text-secondary-fixed-dim">TEL: (+52) 311 373 8261</span>
            <span className="text-tertiary-fixed-dim">STATUS: PRODUCTION_STABLE</span>
          </div>
        </div>

        {/* Identity + headline */}
        <div className="flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 font-code text-[12px] font-medium uppercase tracking-widest text-secondary">
            <span className="material-symbols-outlined text-[16px]">terminal</span>
            <span>&gt; IDENTITY::INITIALIZED // AI_PROJECT_MANAGER &amp; IMPLEMENTATION_ENGINEER</span>
          </div>

          <h1 className="font-display-xl uppercase tracking-tight text-primary [text-shadow:0_0_18px_rgba(0,251,251,0.25)]">
            <GlitchLine text="BUILDING THE" primary="#00fbfb" secondary="#fe00fe" />
            <br />
            <GlitchLine
              className="text-primary-fixed [text-shadow:0_0_24px_rgba(0,251,251,0.6)]"
              text="NEURAL FUTURE."
              primary="#ffffff"
              secondary="#ffabf3"
            />
          </h1>

          <div className="flex flex-col gap-1">
            <div className="font-headline-sm uppercase tracking-wide text-tertiary-fixed-dim">
              AI Project Manager | AI Implementation Engineer | Software Engineer
            </div>
            <p className="max-w-4xl font-body-lg leading-relaxed text-on-surface-variant">
              Bridging the gap between enterprise AI strategy, corporate governance, and hands-on
              engineering. Currently driving AI transformation at Megacable serving{' '}
              <strong className="text-primary-fixed">150,000+ monthly users</strong> across
              multi-agent generative systems, real-time RAG diagnostic engines, and high-concurrency
              telephony platforms.
            </p>
            <div className="mt-1 flex items-center gap-2 font-code text-[14px] text-outline">
              <span className="text-primary-fixed">&gt; COMM_LINK:</span>
              <a
                className="text-primary underline-offset-4 hover:text-primary-fixed hover:underline"
                href="mailto:roldanmadero16@outlook.com"
              >
                roldanmadero16@outlook.com
              </a>
              <span className="text-outline">|</span>
              <span>Guadalajara, Jalisco, Mexico</span>
            </div>
          </div>
        </div>

        {/* Telemetry pill strip */}
        <div className="flex flex-wrap items-center gap-2">
          {pills.map((pill) => (
            <div
              key={pill.text}
              className="flex items-center gap-2 bg-surface-container px-3 py-1 font-code text-[10px] font-bold uppercase text-primary-fixed"
              style={{
                border: `1px solid ${pill.border}`,
                boxShadow: pill.glow ? `0 0 12px ${pill.glow}` : undefined,
              }}
            >
              <span
                className={`inline-block h-1.5 w-1.5 ${pill.pulse ? 'animate-pulse' : ''}`}
                style={{ backgroundColor: pill.color }}
              />
              {pill.text}
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4 pt-1">
          <a
            href="#projects"
            className="group inline-flex items-center justify-center bg-primary-container px-6 py-3 font-code text-[12px] font-medium uppercase tracking-wider text-on-primary-container shadow-[0_0_20px_rgba(0,251,251,0.5)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#fe00fe,0_0_25px_rgba(0,251,251,0.8)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span>[ VIEW KEY PROJECTS</span>
              <span className="material-symbols-outlined text-[16px] transition-transform duration-200 group-hover:translate-x-1">
                arrow_forward
              </span>
              <span>]</span>
            </span>
          </a>
          <a
            href="#experience"
            className="group inline-flex items-center justify-center border border-secondary/30 bg-surface-container-low px-6 py-3 font-code text-[12px] font-medium uppercase tracking-wider text-secondary transition-all duration-200 hover:bg-secondary-container hover:text-text-inverse hover:shadow-[0_0_20px_rgba(254,0,254,0.6)]"
          >
            <span className="flex items-center gap-2">
              <span>&gt;_</span>
              <span>[ ENTERPRISE EXPERIENCE ]</span>
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/roldanmadero/?locale=es"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center border border-primary-fixed/30 bg-surface-container px-4 py-3 font-code text-[12px] font-medium uppercase tracking-wider text-primary-fixed transition-colors hover:bg-surface-container-high"
          >
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px]">hub</span>
              <span>[ CONNECT ON LINKEDIN ]</span>
            </span>
          </a>
          <a
            href="https://github.com/MoonRiver75"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center bg-surface-container px-4 py-3 font-code text-[12px] font-medium uppercase tracking-wider text-on-surface-variant transition-colors hover:bg-surface-container-high hover:text-primary-fixed"
          >
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px]">code</span>
              <span>[ GITHUB: @MoonRiver75 ]</span>
            </span>
          </a>
        </div>

        {/* Terminal console */}
        <div className="mt-4 w-full border border-surface-light bg-surface-container-lowest p-4 shadow-2xl">
          <div className="mb-2 flex items-center justify-between bg-surface-container-low px-3 py-1">
            <div className="flex items-center gap-2 font-code text-[10px] font-bold text-outline">
              <span className="h-2.5 w-2.5 bg-[#ffb4ab]" />
              <span className="h-2.5 w-2.5 bg-secondary-container" />
              <span className="h-2.5 w-2.5 bg-tertiary-fixed-dim" />
              <span className="ml-1 text-on-surface">session::root@megacable-ai-core:~$</span>
            </div>
            <span className="font-code text-[10px] font-bold text-primary-fixed">
              AUDIT_SUITE v2.8 // ORCHESTRATOR
            </span>
          </div>
          <div className="flex flex-col gap-1 overflow-x-auto font-code text-[14px] text-on-surface">
            <p className="text-tertiary-fixed-dim">
              <span className="text-secondary-fixed-dim">root@megacable-ai-core:~$</span>{' '}
              python -m enterprise_rag.audit --system &quot;RAG_FIELD_AUDITOR&quot; --telemetry
              &quot;RSSI, JITTER, OPTICAL_PWR&quot; --scale 27000
            </p>
            <p className="text-on-surface-variant">
              [SYSTEM] Ingestion stream linked: Evaluating field technician validation payloads via
              Geolocation + Image Computer Vision...
            </p>
            <p className="text-on-surface-variant">
              [TELEMETRY] Optical link budget verified | Geo-fence delta &lt; 4.2m | Optical power
              threshold: PASS (-18.4 dBm)
            </p>
            <p className="flex items-center gap-2 text-primary-fixed">
              <span>
                [STATUS] 27,000 queries processed | Fraud prevention: 99.4% | Escalation
                containment: 65% | Autonomous escalation: ACTIVE
              </span>
              <span className="cursor-blink inline-block h-4 w-2 bg-primary-fixed" />
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}