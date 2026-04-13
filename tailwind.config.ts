import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E8202A',
          dark: '#C41820',
          light: '#FFE8E9',
        },
        secondary: '#F5C542',
        'green-esg': {
          DEFAULT: '#4CAF50',
          dark: '#388E3C',
          light: '#E8F5E9',
        },
        surface: {
          page: '#FFFFFF',
          card: '#F5F5F7',
          subtle: '#FAFAFA',
          block: '#F0F0F5',
          dark: '#1A1A2E',
        },
        ink: {
          heading: '#1A1A2E',
          body: '#3D3D4E',
          caption: '#717182',
          muted: '#9EA0AE',
          white: '#FFFFFF',
        },
        'chart-red': '#E8202A',
        'chart-gold': '#F5C542',
        'chart-gray': '#B0B7C3',
        'chart-dark': '#1A1A2E',
        positive: '#22C55E',
        negative: '#E8202A',
        'border-light': '#E5E7EB',
        divider: '#EBEBF0',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
        body: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        'page-title': ['clamp(36px,4.5vw,64px)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'section-title': ['clamp(20px,2.5vw,32px)', { lineHeight: '1.2' }],
        'card-title': ['clamp(15px,1.2vw,18px)', { lineHeight: '1.3' }],
        'kpi': ['clamp(28px,3.5vw,52px)', { lineHeight: '1.0', letterSpacing: '-0.02em' }],
        'kpi-sm': ['clamp(20px,2vw,28px)', { lineHeight: '1.1' }],
        'body': ['clamp(12px,0.9vw,15px)', { lineHeight: '1.6' }],
        'body-sm': ['clamp(11px,0.8vw,13px)', { lineHeight: '1.5' }],
        'caption': ['clamp(10px,0.75vw,12px)', { lineHeight: '1.4' }],
        'nav': ['clamp(11px,0.8vw,13px)', { lineHeight: '1' }],
        'badge': ['clamp(10px,0.75vw,13px)', { lineHeight: '1' }],
      },
      borderRadius: {
        card: '16px',
        'card-lg': '20px',
        badge: '12px',
        pill: '999px',
        diamond: '8px',
      },
      boxShadow: {
        card: '0 2px 12px rgba(0,0,0,0.08)',
        'card-photo': '0 4px 20px rgba(0,0,0,0.12)',
        kpi: '0 1px 6px rgba(0,0,0,0.06)',
      },
      spacing: {
        'slide-x': '2.5vw',
        'slide-y': '1.5vh',
      },
    },
  },
  plugins: [],
}

export default config
