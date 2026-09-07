const socials = [
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Twitter/X', href: 'https://x.com' },
]

const stack = [
  'PyTorch',
  'Python',
  'Docker',
  'Kubernetes',
  'TensorFlow',
  'CUDA',
  'LangChain',
  'AWS',
  'Ray',
]

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-cyber-cyan/20 py-12">
      <div className="container-cyber">
        <div className="mb-10 flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <p className="font-display text-lg font-black tracking-[0.12em] text-cyber-text">
              <span className="text-cyber-cyan">&lt;</span>
              AI<span className="text-cyber-magenta">_</span>Engineer
              <span className="text-cyber-green">/&gt;</span>
            </p>
            <p className="mt-2 font-body text-xs text-cyber-textSecondary">
              Building systems that learn. Located in the cloud.
            </p>
          </div>

          <ul className="flex items-center gap-6">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="nav-link"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8 flex flex-wrap items-center justify-center gap-2 md:justify-start">
          {stack.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-cyber-cyan/10 pt-6 font-body text-xs text-cyber-textSecondary md:flex-row">
          <p>&copy; 2026 AI Engineer. All rights reserved.</p>
          <p className="text-cyber-green">
            [STATUS: AVAILABLE_FOR_WORK]
          </p>
        </div>
      </div>
    </footer>
  )
}