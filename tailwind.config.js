/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fire-orange': '#FF4500',
        'fire-red': '#DC143C',
        'golden': '#FFD700',
        'birria-brown': '#8B4513',
      },
      fontFamily: {
        'display': ['Poppins', 'system-ui', 'sans-serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        pifis: {
          "primary": "#FF4500",
          "secondary": "#FFD700",
          "accent": "#DC143C",
          "neutral": "#1a1a1a",
          "base-100": "#0a0a0a",
          "base-200": "#1a1a1a",
          "base-300": "#2a2a2a",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      },
    ],
  },
}
