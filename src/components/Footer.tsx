const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/roldanmadero/?locale=es' },
  { label: 'GitHub', href: 'https://github.com/MoonRiver75' },
  { label: 'Email', href: 'mailto:roldanmadero16@outlook.com' },
]

const stack = [
  'PyTorch',
  'Python',
  'Docker',
  'Kubernetes',
  'AWS Bedrock',
  'RAG',
  'FastAPI',
  'Unity',
  'Ollama',
  'SQL',
]

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-cyber-cyan/20 py-12">
      <div className="container-cyber">
        <div className="mb-10 flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <p className="font-display text-lg font-black tracking-[0.12em] text-cyber-text">
              <span className="text-cyber-cyan">&lt;</span>
              JESUS{' '}
              <span className="text-cyber-magenta">ROLDAN</span>
              <span className="text-cyber-green">/&gt;</span>
            </p>
            <p className="mt-2 font-body text-xs text-cyber-textSecondary">
              [UPLINK_READY // TRANSMISSION_TERMINAL] — Available for AI
              project leadership & enterprise generative transformations.
            </p>
          </div>

          <ul className="flex items-center gap-6">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target={social.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noreferrer"
                  className="nav-link"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-4 border-t border-cyber-cyan/10 pt-6 font-body text-xs text-cyber-textSecondary md:grid-cols-3">
          <div>
            <span className="text-cyber-magenta">&gt; EMAIL:</span>{' '}
            <a
              href="mailto:roldanmadero16@outlook.com"
              className="transition-colors hover:text-cyber-cyan"
            >
              roldanmadero16@outlook.com
            </a>
          </div>
          <div>
            <span className="text-cyber-magenta">&gt; PHONE:</span>{' '}
            <a
              href="tel:+523113738261"
              className="transition-colors hover:text-cyber-cyan"
            >
              (+52) 311 373 8261
            </a>
          </div>
          <div>
            <span className="text-cyber-magenta">&gt; BASE_LOC:</span>{' '}
            Guadalajara, Jalisco, Mexico
          </div>
        </div>

        <div className="mb-8 mt-8 flex flex-wrap items-center justify-center gap-2 md:justify-start">
          {stack.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-cyber-cyan/10 pt-6 font-body text-xs text-cyber-textSecondary md:flex-row">
          <p>
            &copy; 2026 Jes&uacute;s Rold&aacute;n Madero Aguilar. All neural
            architectures deployed.
          </p>
          <p className="text-cyber-green">
            [SYS_STATUS: ONLINE // ALL INTEL CIRCUITS OPERATIONAL]
          </p>
        </div>
      </div>
    </footer>
  )
}