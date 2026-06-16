import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0A',
        gold: '#C8A56A',
        'gold-light': '#D4B97E',
        'gold-muted': '#8B6E42',
        cream: '#F4F1EA',
        muted: '#8A8A8A',
        'surface-1': '#111111',
        'surface-2': '#161616',
        'border-subtle': '#1E1E1E',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      letterSpacing: {
        'widest-2': '0.2em',
        'widest-3': '0.3em',
      },
      animation: {
        'grid-pulse': 'gridPulse 8s ease-in-out infinite',
      },
      keyframes: {
        gridPulse: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.6' },
        },
      },
    },
  },
  plugins: [],
}

export default config
