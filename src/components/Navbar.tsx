const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  return (
    <header className="nav-cyber sticky top-0 z-50">
      <nav className="container-cyber flex items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-3 font-display text-sm font-bold tracking-[0.12em] text-cyber-text transition-all duration-300 hover:text-cyber-cyan hover:[text-shadow:0_0_20px_rgba(0,255,255,0.4)]"
        >
          <img src="/logo.svg" alt="Jesús Roldán Madero" className="h-8 w-auto" />
          JESUS ROLDAN
        </a>

        <ul className="flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav-link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}