import { useI18n } from '../i18n'

function GlitchLine({
  text,
  className = '',
  primary,
  secondary,
  neon = false,
}: {
  text: string
  className?: string
  primary: string
  secondary: string
  neon?: boolean
}) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className={`relative z-10 ${neon ? 'text-neon' : ''}`}>{text}</span>
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

export default function Hero() {
  const { t } = useI18n()
  const { hero } = t

  return (
    <section className="relative w-full overflow-hidden border-b border-surface-light py-12 lg:py-20">
      <div className="dots-grid absolute inset-0 opacity-40" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary-fixed/10 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-secondary-container/15 blur-[120px]"
        aria-hidden="true"
      />

      <div className="container-cyber relative z-10 flex flex-col gap-10">
        {/* Diagnostic bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-l-2 border-primary-fixed bg-surface-container-low px-4 py-2">
          <div className="flex items-center gap-2 font-code text-[10px] font-bold uppercase tracking-widest text-primary-fixed">
            <span className="inline-block h-2 w-2 animate-ping bg-primary-fixed" />
            {hero.sysRun}
          </div>
          <div className="flex flex-wrap items-center gap-4 font-code text-[10px] font-bold text-outline">
            <span>{hero.loc}</span>
            <span className="text-secondary-fixed-dim">{hero.tel}</span>
            <span className="text-tertiary-fixed-dim">{hero.status}</span>
          </div>
        </div>

        {/* Identity + headline */}
        <div className="flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 font-code text-[12px] font-medium uppercase tracking-widest text-secondary">
            <span className="material-symbols-outlined text-[16px]">terminal</span>
            <span>{hero.identity}</span>
          </div>

          <h1 className="font-display-xl uppercase tracking-tight text-primary [text-shadow:0_0_24px_rgba(0,255,255,0.5)]">
            <GlitchLine
              className="text-glow-cyan"
              text={hero.headline1}
              primary="#00ffff"
              secondary="#ff00ff"
            />
            <br />
            <GlitchLine
              className="[filter:drop-shadow(0_0_18px_rgba(255,0,255,0.55))]"
              neon
              text={hero.headline2}
              primary="#00ffff"
              secondary="#ff8ff7"
            />
          </h1>

          <div className="flex flex-col gap-1">
            <div className="font-headline-sm uppercase tracking-wide text-tertiary-fixed-dim [text-shadow:0_0_18px_rgba(57,255,20,0.45)]">
              {hero.roleLine}
            </div>
            <p className="max-w-4xl font-body-lg leading-relaxed text-on-surface-variant">
              {hero.introPre}
              <strong className="text-primary-fixed">{hero.introStrong}</strong>
              {hero.introPost}
            </p>
            <div className="mt-1 flex items-center gap-2 font-code text-[14px] text-outline">
              <span className="text-primary-fixed">{hero.commLinkLabel}</span>
              <a
                className="text-primary underline-offset-4 hover:text-primary-fixed hover:underline"
                href="mailto:roldanmadero16@outlook.com"
              >
                roldanmadero16@outlook.com
              </a>
              <span className="text-outline">|</span>
              <span>{hero.location}</span>
            </div>
          </div>
        </div>

        {/* Telemetry pill strip */}
        <div className="flex flex-wrap items-center gap-2">
          {hero.pills.map((pill) => (
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
            className="group inline-flex items-center justify-center bg-primary-container px-6 py-3 font-code text-[12px] font-medium uppercase tracking-wider text-on-primary-container shadow-[0_0_24px_rgba(0,255,255,0.8)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#ff00ff,0_0_30px_rgba(0,255,255,0.95)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span>[ {hero.ctaView}</span>
              <span className="material-symbols-outlined text-[16px] transition-transform duration-200 group-hover:translate-x-1">
                arrow_forward
              </span>
              <span>]</span>
            </span>
          </a>
          <a
            href="#experience"
            className="group inline-flex items-center justify-center border border-secondary/30 bg-surface-container-low px-6 py-3 font-code text-[12px] font-medium uppercase tracking-wider text-secondary transition-all duration-200 hover:bg-secondary-container hover:text-text-inverse hover:shadow-[0_0_24px_rgba(255,0,255,0.8)]"
          >
            <span className="flex items-center gap-2">
              <span>&gt;_</span>
              <span>[ {hero.ctaExperience} ]</span>
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
              <span>[ {hero.ctaLinkedIn} ]</span>
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
              <span>[ {hero.ctaGithub} ]</span>
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
              <span className="ml-1 text-on-surface">{hero.terminal.title}</span>
            </div>
            <span className="font-code text-[10px] font-bold text-primary-fixed">
              {hero.terminal.suite}
            </span>
          </div>
          <div className="flex flex-col gap-1 overflow-x-auto font-code text-[14px] text-on-surface">
            <p className="text-tertiary-fixed-dim">
              <span className="text-secondary-fixed-dim">root@megacable-ai-core:~$</span>{' '}
              {hero.terminal.cmd}
            </p>
            <p className="text-on-surface-variant">{hero.terminal.line1}</p>
            <p className="text-on-surface-variant">{hero.terminal.line2}</p>
            <p className="flex items-center gap-2 text-primary-fixed">
              <span>{hero.terminal.status}</span>
              <span className="cursor-blink inline-block h-4 w-2 bg-primary-fixed" />
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}