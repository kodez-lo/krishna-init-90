/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Fraunces', 'serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      colors: {
        // Ink — deep academic navy, replaces the old "brown" scale
        ink: {
          50: '#f3f5f9',
          100: '#e5e9f1',
          200: '#c9d1e2',
          300: '#a6b2cc',
          400: '#7686ac',
          500: '#4d5c85',
          600: '#374266',
          700: '#293252',
          800: '#1b2340',
          900: '#121a33',
          950: '#0a0f1f',
        },
        // Paper — cool editorial off-white, replaces the old "cream" scale
        paper: {
          50: '#ffffff',
          100: '#f5f6f8',
          200: '#eceef2',
          300: '#dde1e8',
          400: '#cdd2dc',
          500: '#b9c0cd',
          600: '#a3abbb',
          700: '#8b93a6',
          800: '#727a8f',
          900: '#5c6376',
        },
        // Gold — brass accent for medallions, rank marks, CTAs on dark
        gold: {
          200: '#ecdcab',
          300: '#e2c887',
          400: '#d3b264',
          500: '#c6a15b',
          600: '#a9843f',
          700: '#8a6a33',
        },
      },
      borderRadius: {
        '2xl': '14px',
        '3xl': '20px',
        '4xl': '28px',
      },
      boxShadow: {
        'soft': '0 2px 12px rgba(10,15,31,0.06)',
        'soft-lg': '0 8px 24px rgba(10,15,31,0.10)',
        'warm': '0 10px 30px rgba(10,15,31,0.16)',
        'gold': '0 6px 20px rgba(198,161,91,0.25)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'counter': 'counter 2s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backgroundSize: {
        'body-pattern': '200px 200px',
      },
    },
  },
  plugins: [],
};
