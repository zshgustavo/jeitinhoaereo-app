import Button from '../ui/Button'
import FlagIcon from '../ui/FlagIcon'
import { useLanguage } from '../../hooks/useLanguage'

export default function LanguageSelector() {
  const { language, setLanguage, languages, t } = useLanguage()

  return (
    <div className="flex items-center gap-2 rounded-full border border-line bg-white px-3 py-2 shadow-sm">
      <span className="text-xs font-semibold uppercase tracking-wide text-muted">
        {t('languageLabel')}
      </span>
      <div className="flex gap-1">
        {languages.map((item) => (
          <Button
            key={item.id}
            type="button"
            variant={item.id === language ? 'primary' : 'ghost'}
            aria-pressed={item.id === language}
            onClick={() => setLanguage(item.id)}
          >
            <FlagIcon code={item.flag} />
            <span className="hidden sm:inline">{item.label}</span>
          </Button>
        ))}
      </div>
    </div>
  )
}
