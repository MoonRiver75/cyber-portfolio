export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden border-t border-surface-light bg-surface-container-lowest py-12">
      <div className="container-cyber relative z-10 flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex flex-col items-center gap-1 md:items-start">
          <div className="flex items-center gap-2 border border-tertiary-fixed-dim/30 bg-surface-container px-3 py-1 font-code text-[12px] font-medium uppercase tracking-widest text-tertiary-fixed-dim shadow-[0_0_10px_rgba(42,229,0,0.2)]">
            <span className="inline-block h-2.5 w-2.5 animate-pulse bg-tertiary-fixed-dim" />
            SYS_STATUS: ONLINE // ALL INTEL CIRCUITS OPERATIONAL
          </div>
          <p className="mt-1 font-code text-[10px] font-bold tracking-wider text-outline">
            &copy; 2026 Jes&uacute;s Rold&aacute;n Madero Aguilar. All neural architectures deployed.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <a
            href="https://github.com/MoonRiver75"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 border border-surface-light bg-surface-container-low px-3 py-1 font-code text-[12px] font-medium text-on-surface-variant transition-all hover:border-primary-fixed/50 hover:text-primary-fixed"
          >
            <span className="material-symbols-outlined text-[16px]">code</span>
            <span>[GITHUB]</span>
          </a>
          <a
            href="https://www.linkedin.com/in/roldanmadero/?locale=es"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 border border-surface-light bg-surface-container-low px-3 py-1 font-code text-[12px] font-medium text-on-surface-variant transition-all hover:border-secondary/50 hover:text-secondary"
          >
            <span className="material-symbols-outlined text-[16px]">hub</span>
            <span>[LINKEDIN]</span>
          </a>
          <a
            href="mailto:roldanmadero16@outlook.com"
            className="flex items-center gap-1 border border-surface-light bg-surface-container-low px-3 py-1 font-code text-[12px] font-medium text-on-surface-variant transition-all hover:border-tertiary-fixed-dim/50 hover:text-tertiary-fixed-dim"
          >
            <span className="material-symbols-outlined text-[16px]">mail</span>
            <span>[EMAIL]</span>
          </a>
        </div>
      </div>
    </footer>
  )
}