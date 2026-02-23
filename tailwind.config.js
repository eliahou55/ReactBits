/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B35',
        'primary-light': '#FF8C61',
        'primary-dark': '#E85A2A',
        secondary: '#F7931E',
        accent: '#FDC830',
        'accent-light': '#FFE066',
        dark: '#0a0a0a',
        'dark-lighter': '#1a1a1a',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #FF6B35 0%, #F7931E 50%, #FDC830 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0a0a0a 0%, #1a0f0a 50%, #0a0a0a 100%)',
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'pulse-border': 'pulse-border 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '25%': { transform: 'translateY(-20px) translateX(10px)' },
          '50%': { transform: 'translateY(-10px) translateX(-10px)' },
          '75%': { transform: 'translateY(-15px) translateX(5px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 107, 53, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(247, 147, 30, 0.5), 0 0 60px rgba(253, 200, 48, 0.3)' },
        },
      },
    },
  },
  plugins: [],
}
