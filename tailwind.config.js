/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFF5F0',
          100: '#FFE8DC',
          200: '#FFD1B9',
          300: '#FFB996',
          400: '#FF9264',
          500: '#FF6B35', // Main orange
          600: '#E55A28',
          700: '#CC4A1C',
          800: '#B33B11',
          900: '#992C07',
        },
        secondary: {
          50: '#F5F0ED',
          100: '#E8DDD6',
          200: '#D1BBB0',
          300: '#BA9989',
          400: '#8B5E4D',
          500: '#4A2C2A', // Dark brown
          600: '#3D2422',
          700: '#301C1A',
          800: '#231412',
          900: '#160C0A',
        },
        cream: {
          50: '#FDFDFB',
          100: '#FAF8F5',
          200: '#F5F1EB',
          300: '#F0EAE1',
          400: '#E6DCD0',
          500: '#DCCEBD',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px rgba(0, 0, 0, 0.08)',
        'card': '0 4px 20px rgba(74, 44, 42, 0.1)',
        'card-hover': '0 8px 30px rgba(255, 107, 53, 0.2)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
