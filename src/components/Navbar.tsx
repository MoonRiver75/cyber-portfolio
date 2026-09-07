const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Metrics', href: '#metrics' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  return (
    <header className="nav-cyber sticky top-0 z-50">
      <nav className="container-cyber flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="Jesús Roldán Madero" className="flex-shrink-0 h-8 w-auto" />
          <div className="flex flex-col">
            <span className="font-display text-[16px] font-bold uppercase tracking-tight text-cyber-text">
              Jes&uacute;s Rold&aacute;n Madero{' '}
              <span className="border border-cyber-cyan/30 bg-cyber-surfaceLight px-2 py-0.5 font-code text-[10px] font-medium text-cyber-cyan">
                [AI_PM.SYS]
              </span>
            </span>
            <span className="font-code text-[10px] tracking-wider text-cyber-textSecondary">
              &gt; AI PROJECT MANAGER &amp; IMPLEMENTATION ENGINEER
            </span>
          </div>
        </div>

        <nav className="hidden items-center gap-3 lg:flex">
          {navLinks.map((link, i) =>
            i === 0 ? (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1 font-code text-[12px] font-medium uppercase tracking-wider bg-cyber-cyan text-cyber-bg shadow-[0_0_12px_rgba(0,251,251,0.4)] transition-all hover:brightness-110"
              >
                {link.label}
              </a>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-1 font-code text-[12px] font-medium uppercase tracking-wider text-[#b9cac9] transition-colors hover:bg-cyber-surfaceLight hover:text-primary ${
                  link.label === 'Skills' ? 'hover:text-secondary' : ''
                }`}
              >
                {link.label}
              </a>
            ),
          )}
        </nav>
      </nav>
    </header>
  )
}