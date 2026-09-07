import { useState } from 'react'
import { useI18n } from '../i18n'
import { downloadCvPdf } from '../lib/cv'

export default function ResumeDownload() {
  const { lang, t } = useI18n()
  const { cv } = t
  const [busy, setBusy] = useState(false)

  const handleDownload = async () => {
    if (busy) return
    setBusy(true)
    try {
      await downloadCvPdf(lang)
    } finally {
      setBusy(false)
    }
  }

  return (
    <section
      id="cv"
      className="w-full scroll-mt-24 border-b border-surface-light bg-surface-container px-4 py-16 lg:px-8 lg:py-24"
    >
      <div className="container-cyber flex flex-col gap-10">
        <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-end">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 font-code text-[12px] font-medium uppercase tracking-widest text-primary-fixed">
              <span className="h-2 w-2 bg-primary-fixed" />
              <span>{cv.kicker}</span>
            </div>
            <h2 className="font-headline-lg uppercase tracking-tight text-primary">
              {cv.title}
            </h2>
          </div>
          <div className="flex items-center gap-2 border border-surface-light bg-surface-container-lowest px-3 py-1 font-code text-[10px] font-bold text-outline">
            <span className="material-symbols-outlined text-[14px] text-primary-fixed">picture_as_pdf</span>
            <span>{cv.meta}</span>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-8 border bg-surface p-8 lg:flex-row lg:items-center lg:p-10"
          style={{ borderColor: 'rgba(0,251,251,0.3)' }}
        >
          <div className="flex max-w-2xl flex-col gap-3">
            <p className="font-body-md leading-relaxed text-on-surface-variant">{cv.description}</p>
            <div className="flex items-center gap-2 font-code text-[12px] text-on-surface">
              <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">description</span>
              <span className="text-outline">{cv.fileLabel}</span>
              <span className="text-primary-fixed">{cv.fileName}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="border border-primary-fixed/30 bg-surface-container-lowest px-2 py-0.5 font-code text-[10px] font-bold text-primary-fixed">
                {lang === 'es' ? 'GENERADO EN: ESPAÑOL' : 'GENERATED IN: ENGLISH'}
              </span>
              <span className="border border-secondary/30 bg-surface-container-lowest px-2 py-0.5 font-code text-[10px] font-bold text-secondary">
                {lang === 'es' ? 'TIMES NEW ROMAN // MONOCROMO' : 'TIMES NEW ROMAN // MONOCHROME'}
              </span>
              <span className="border border-tertiary-fixed-dim/30 bg-surface-container-lowest px-2 py-0.5 font-code text-[10px] font-bold text-tertiary-fixed-dim">
                {lang === 'es' ? 'ORDEN CRONOLÓGICO INVERSO' : 'REVERSE CHRONOLOGICAL'}
              </span>
            </div>
          </div>

          <div className="flex min-w-[280px] flex-col gap-2">
            <button
              type="button"
              onClick={handleDownload}
              disabled={busy}
              className="group inline-flex items-center justify-center gap-2 bg-primary-container px-6 py-4 font-code text-[12px] font-medium uppercase tracking-wider text-on-primary-container shadow-[0_0_20px_rgba(0,251,251,0.5)] transition-all hover:shadow-[3px_3px_0px_#fe00fe,0_0_30px_rgba(0,251,251,0.9)] disabled:cursor-not-allowed disabled:opacity-60"
            >
              <span className="material-symbols-outlined text-[20px]">{busy ? 'hourglass_top' : 'download'}</span>
              <span>{busy ? '...' : cv.btnLabel}</span>
            </button>
            <span className="text-center font-code text-[10px] font-bold uppercase tracking-wider text-outline">
              {lang === 'es' ? 'PDF GENERADO AL INSTANTE EN TU IDIOMA' : 'PDF GENERATED INSTANTLY IN YOUR LANGUAGE'}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}