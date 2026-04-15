/* eslint-disable react-refresh/only-export-components */
import { createContext, useMemo, useState } from 'react'
import translations, { languages } from '../data/translations'

export const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('pt')

  const value = useMemo(() => {
    const t = (key) => {
      const entry = translations[key]
      if (!entry) return key
      return entry[language] ?? entry.en ?? key
    }

    return { language, setLanguage, t, languages }
  }, [language])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
