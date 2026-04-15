import Button from '../ui/Button'
import { useLanguage } from '../../hooks/useLanguage'

export default function ConfirmationScreen({ code, onReset }) {
  const { t } = useLanguage()

  if (!code) return null

  return (
    <section className="flex flex-col gap-4 rounded-2xl border border-line bg-white/80 p-4 text-center shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">JA</p>
      <h2 className="text-2xl font-extrabold text-ink">{t('confirmationTitle')}</h2>
      <p className="text-muted">{t('confirmationCopy')}</p>
      <div className="mx-auto inline-flex rounded-2xl border border-orange bg-orange/5 px-5 py-3 text-lg font-extrabold text-orange">
        {code}
      </div>
      <div className="flex justify-center">
        <Button type="button" variant="ghost" onClick={onReset}>
          {t('searchTitle')}
        </Button>
      </div>
    </section>
  )
}
