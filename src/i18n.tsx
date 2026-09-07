import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { en, translations } from './i18n/translations'
import type { Lang, Strings } from './i18n/translations'

/* oxlint-disable react/only-export-components */

const Context = createContext<{ lang: Lang; setLang: (lang: Lang) => void; t: Strings }>({
  lang: 'en',
  setLang: () => {},
  t: en,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === 'undefined') return 'en'
    const stored = window.localStorage.getItem('portfolio.lang')
    return stored === 'es' || stored === 'en' ? stored : 'en'
  })

  useEffect(() => {
    window.localStorage.setItem('portfolio.lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo(() => ({ lang, setLang, t: translations[lang] }), [lang])
  return <Context.Provider value={value}>{children}</Context.Provider>
}

export function useI18n() {
  return useContext(Context)
}

export type { Lang }