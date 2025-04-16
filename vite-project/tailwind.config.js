/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from "tailwind-scrollbar";
export default {
 
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // Adjust based on your file structure
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'], // Define the custom font
      },
      spacing: {
        'sec-md': '1.5rem', // Custom spacing value
      },
      colors: {
        primary: {
          50: '#4F46E5', // Replace with your desired color
          60: '#4338CA',
        },
        gray: {
          10: '#F9FAFB',
          30: '#D1D5DB',
          50: '#6B7280',
          90: '#111827',
        },
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
      },
    
    },
  },
  plugins: [tailwindScrollbar],
};
