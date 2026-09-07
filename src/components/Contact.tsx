import { useI18n } from '../i18n'

export default function Contact() {
  const { t } = useI18n()
  const { contact } = t

  return (
    <section
      id="contact"
      className="w-full scroll-mt-24 bg-surface-container-lowest px-4 py-16 lg:px-8 lg:py-24"
    >
      <div
        className="container-cyber relative overflow-hidden border bg-surface p-8 shadow-[0_0_40px_rgba(0,251,251,0.15)] lg:p-12"
        style={{ borderColor: 'rgba(0,251,251,0.4)' }}
      >
        <div
          className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-secondary-container/10 blur-[100px]"
          aria-hidden="true"
        />
        <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="flex max-w-2xl flex-col gap-2">
            <div className="flex items-center gap-2 font-code text-[10px] font-bold uppercase tracking-widest text-primary-fixed">
              <span className="inline-block h-2 w-2 animate-ping bg-primary-fixed" />
              <span>{contact.kicker}</span>
            </div>
            <h3 className="font-headline-lg uppercase tracking-tight text-primary">
              {contact.title}
            </h3>
            <p className="font-body-md leading-relaxed text-on-surface-variant">
              {contact.description}
            </p>
            <div className="flex flex-col gap-1 pt-1 font-code text-[14px]">
              <div className="flex items-center gap-2 text-on-surface">
                <span className="text-primary-fixed">{contact.emailLabel}</span>
                <a className="text-primary-fixed hover:underline" href="mailto:roldanmadero16@outlook.com">
                  roldanmadero16@outlook.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-on-surface">
                <span className="text-secondary">{contact.phoneLabel}</span>
                <a className="text-secondary hover:underline" href="tel:+523113738261">
                  (+52) 311 373 8261
                </a>
              </div>
              <div className="flex items-center gap-2 text-on-surface">
                <span className="text-tertiary-fixed-dim">{contact.baseLocLabel}</span>
                <span className="text-on-surface-variant">{contact.baseLoc}</span>
              </div>
            </div>
          </div>

          <div className="flex min-w-[280px] flex-col gap-2">
            <a
              href="mailto:roldanmadero16@outlook.com"
              className="group inline-flex items-center justify-center gap-2 bg-primary-container px-6 py-4 font-code text-[12px] font-medium uppercase tracking-wider text-on-primary-container shadow-[0_0_20px_rgba(0,251,251,0.5)] transition-all hover:shadow-[3px_3px_0px_#fe00fe,0_0_30px_rgba(0,251,251,0.9)]"
            >
              <span className="material-symbols-outlined text-[20px]">send</span>
              <span>{contact.btnTransmit}</span>
            </a>
            <a
              href="https://www.linkedin.com/in/roldanmadero/?locale=es"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 border border-secondary/40 bg-surface-container-low px-6 py-3 font-code text-[12px] font-medium uppercase tracking-wider text-secondary shadow-[0_0_15px_rgba(254,0,254,0.3)] transition-all hover:bg-secondary-container hover:text-text-inverse"
            >
              <span className="material-symbols-outlined text-[18px]">hub</span>
              <span>{contact.btnLinkedIn}</span>
            </a>
            <a
              href="https://github.com/MoonRiver75"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 border border-surface-light bg-surface-container-low px-6 py-3 font-code text-[12px] font-medium uppercase tracking-wider text-on-surface-variant transition-all hover:border-primary-fixed/40 hover:text-primary-fixed"
            >
              <span className="material-symbols-outlined text-[18px]">code</span>
              <span>{contact.btnGithub}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}