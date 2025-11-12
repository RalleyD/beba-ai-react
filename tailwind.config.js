/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'beba-pink': '#FF1B8D',
        'beba-blue': '#0D7FDC',
        'beba-cyan': '#00D9FF',
        'beba-purple': '#2D1B3D',
        'beba-purple-light': '#4A2F5A',
      },
      backgroundImage: {
        'gradient-beba': 'linear-gradient(135deg, #FF1B8D 0%, #0D7FDC 100%)',
        'gradient-beba-reverse': 'linear-gradient(135deg, #0D7FDC 0%, #FF1B8D 100%)',
        'gradient-cyan': 'linear-gradient(135deg, #0D7FDC 0%, #00D9FF 100%)',
      },
      screens: {
        'xs': '475px',
      },
      fontFamily: {
        'display': ['Exo 2', 'Orbitron', 'sans-serif'],
        'body': ['Inter', 'Roboto', 'sans-serif'],
      },
      animation: {
        'count-up': 'countUp 2s ease-out',
        'pulse-glow': 'pulseGlow 2s infinite',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
      },
      keyframes: {
        countUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 27, 141, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 27, 141, 0.8)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
