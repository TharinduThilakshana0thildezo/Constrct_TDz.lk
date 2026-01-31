/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0B0B0B',
          light: '#E8EAED',
        },
        card: {
          DEFAULT: '#141414',
          light: '#F5F7FA',
        },
        primary: {
          gold: '#C9A24D',
          goldSecondary: '#9E7C32',
          silver: '#BFC3C7',
        },
        textPrimary: {
          DEFAULT: '#F5F5F5',
          light: '#1A1A1A',
        },
        textSecondary: {
          DEFAULT: '#B0B0B0',
          light: '#5A5A5A',
        },
        borderColor: {
          dark: 'rgba(201, 162, 77, 0.15)',
          light: '#C5C9CD',
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 18px 45px rgba(0,0,0,0.5)',
        subtle: '0 10px 30px rgba(0,0,0,0.35)',
      },
      borderRadius: {
        xl: '1rem',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          lg: '2rem',
        },
      },
      transitionTimingFunction: {
        'emphasized': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};

