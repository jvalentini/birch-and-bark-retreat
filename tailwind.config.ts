import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', '"Times New Roman"', 'serif'],
        body: ['"Hanken Grotesk"', '"Helvetica Neue"', 'sans-serif'],
      },
      colors: {
        primary: '#1d251f',
        secondary: '#82926f',
        accent: '#c48252',
        pine: {
          900: '#1d251f',
          800: '#2a352d',
          700: '#39473a',
          600: '#4b5c4a',
          500: '#5f7260',
        },
        moss: {
          600: '#6f7f5f',
          500: '#82926f',
          400: '#95a584',
        },
        bark: {
          700: '#4e3829',
          600: '#614535',
          500: '#775542',
          400: '#8b6953',
        },
        sand: {
          50: '#f7f2ea',
          100: '#efe7da',
          200: '#e3d6c5',
          300: '#d1c0ab',
        },
        ember: {
          600: '#b26f45',
          500: '#c48252',
          400: '#d59667',
        },
      },
      boxShadow: {
        glow: '0 18px 50px rgba(18, 25, 21, 0.25)',
        lift: '0 20px 45px rgba(31, 25, 20, 0.22)',
      },
      backgroundImage: {
        'hero-mist':
          'radial-gradient(circle at 20% 20%, rgba(247, 242, 234, 0.95), rgba(225, 214, 197, 0.9) 45%, rgba(205, 192, 173, 0.9) 100%)',
        'forest-glow':
          'radial-gradient(circle at 30% 30%, rgba(130, 146, 111, 0.3), transparent 60%)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
