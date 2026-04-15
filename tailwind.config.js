/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#2A1A4A',
        orange: '#F58220',
        ink: '#1E1B3A',
        muted: '#9A96B3',
        line: '#EAE6F2',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        shell: '0 20px 60px rgba(42, 26, 74, 0.18), 0 6px 20px rgba(42, 26, 74, 0.12)',
      },
      borderRadius: {
        shell: '32px',
      },
    },
  },
  plugins: [],
}
