/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'rich-black': 'var(--rich-black)',
        'deep-navy': 'var(--deep-navy)',
        'royal-navy': 'var(--royal-navy)',
        'midnight-purple': 'var(--midnight-purple)',
        'golden-accent': 'var(--golden-accent)',
        'rose-gold': 'var(--rose-gold)',
        'platinum': 'var(--platinum)',
        'sapphire': 'var(--sapphire)',
      },
      backgroundImage: {
        'premium-gradient': 'linear-gradient(135deg, var(--golden-accent), var(--sapphire))',
        'premium-dark': 'linear-gradient(135deg, var(--deep-navy), var(--midnight-purple))',
      },
      animation: {
        'gradient': 'gradient 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
      },
      screens: {
        'xs': '375px',
        '3xl': '1920px',
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      fontSize: {
        '2xs': '0.625rem',
        '3xs': '0.5rem',
      },
      opacity: {
        '95': '0.95',
      },
    },
  },
  plugins: [],
};