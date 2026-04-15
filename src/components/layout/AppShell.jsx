import Card from '../ui/Card'
import LanguageSelector from './LanguageSelector'
import { useLanguage } from '../../hooks/useLanguage'

export default function AppShell({ children, state }) {
  const { t } = useLanguage()

  return (
    <Card className="w-full max-w-5xl bg-white/70 p-8 shadow-shell">
      <div className="flex flex-col gap-6 md:gap-8">
        <header className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange">JeitinhoAéreo</p>
            <h1 className="text-2xl font-extrabold text-ink md:text-3xl">{t('brandLine')}</h1>
            <p className="text-sm text-muted">
              Fluxo de protótipo · estado: <span className="text-orange font-semibold">{state}</span>
            </p>
          </div>
          <LanguageSelector />
        </header>

        <main className="grid gap-6 md:grid-cols-[1fr_1.2fr] md:items-start">
          {children}
        </main>
      </div>
    </Card>
  )
}
