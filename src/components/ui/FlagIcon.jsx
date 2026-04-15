const flagPaths = {
  br: (
    <g>
      <rect width="28" height="20" rx="3" fill="#12A454" />
      <path d="M14 3 4 10l10 7 10-7-10-7Z" fill="#FBD102" />
      <circle cx="14" cy="10" r="3" fill="#2A1A4A" />
    </g>
  ),
  us: (
    <g>
      <rect width="28" height="20" rx="3" fill="#BF0A30" />
      <rect y="4" width="28" height="2" fill="#fff" />
      <rect y="8" width="28" height="2" fill="#fff" />
      <rect y="12" width="28" height="2" fill="#fff" />
      <rect y="16" width="28" height="2" fill="#fff" />
      <rect width="12" height="10" rx="2" fill="#002868" />
      <circle cx="3" cy="3" r="1" fill="#fff" />
      <circle cx="7" cy="3" r="1" fill="#fff" />
      <circle cx="11" cy="3" r="1" fill="#fff" />
      <circle cx="3" cy="7" r="1" fill="#fff" />
      <circle cx="7" cy="7" r="1" fill="#fff" />
      <circle cx="11" cy="7" r="1" fill="#fff" />
    </g>
  ),
  es: (
    <g>
      <rect width="28" height="20" rx="3" fill="#C60B1E" />
      <rect y="5" width="28" height="10" fill="#FFC400" />
    </g>
  ),
}

export default function FlagIcon({ code }) {
  return (
    <svg width="28" height="20" viewBox="0 0 28 20" aria-hidden="true" focusable="false">
      {flagPaths[code] ?? flagPaths.us}
    </svg>
  )
}
