import { useI18n } from '../i18n'

export default function Navbar() {
  const { lang, setLang, t } = useI18n()

  return (
    <header className="nav-cyber sticky top-0 z-50">
      <nav className="container-cyber flex h-16 items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="Jesús Roldán Madero" className="flex-shrink-0 h-8 w-auto" />
          <div className="flex flex-col">
            <span className="font-display text-[16px] font-bold uppercase tracking-tight text-cyber-text">
              Jes&uacute;s Rold&aacute;n Madero{' '}
              <span className="border border-cyber-cyan/30 bg-cyber-surfaceLight px-2 py-0.5 font-code text-[10px] font-medium text-cyber-cyan">
                {t.nav.badge}
              </span>
            </span>
            <span className="font-code text-[10px] tracking-wider text-cyber-textSecondary">
              {t.nav.subtitle}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-3 lg:flex">
            {t.nav.links.map((link, i) =>
              i === 0 ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-1 font-code text-[12px] font-medium uppercase tracking-wider bg-cyber-cyan text-cyber-bg shadow-[0_0_12px_rgba(0,255,255,0.4)] transition-all hover:brightness-110"
                >
                  {link.label}
                </a>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-1 font-code text-[12px] font-medium uppercase tracking-wider text-[#b9cac9] transition-colors hover:bg-cyber-surfaceLight hover:text-primary"
                >
                  {link.label}
                </a>
              ),
            )}
          </nav>

          <div
            className="flex items-center border border-cyber-cyan/30"
            role="group"
            aria-label={t.nav.toggleLabel}
          >
            {(['es', 'en'] as const).map((l, i) => {
              const active = lang === l
              return (
                <span key={l} className="flex items-center">
                  {i > 0 && <span className="h-4 w-px bg-cyber-cyan/30" />}
                  <button
                    type="button"
                    onClick={() => setLang(l)}
                    aria-pressed={active}
                    className={`px-2.5 py-1 font-code text-[11px] font-bold uppercase tracking-wider transition-colors ${
                      active
                        ? 'bg-cyber-cyan text-cyber-bg shadow-[0_0_10px_rgba(0,255,255,0.5)]'
                        : 'text-[#b9cac9] hover:bg-cyber-surfaceLight hover:text-primary'
                    }`}
                  >
                    {l}
                  </button>
                </span>
              )
            })}
          </div>
        </div>
      </nav>
    </header>
  )
}