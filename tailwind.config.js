/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'custom-1': '10rem',
        'custom-2': '25rem',
        'custom-3': '30rem',
      },
      borderRadius: {
        'curved-left': '10% 0 0 7%', // Custom border-radius for curved left effect
      },
      clipPath: {
        'custom-curve': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', // Custom clip-path for curved effect
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #000428, #004e92)', // Custom gradient background
      },
      gridTemplateColumns:{
        'auto':'repeat(auto-fit,minmax(300px, 1fr))'
      },
    },
  },
  plugins: [],
}

