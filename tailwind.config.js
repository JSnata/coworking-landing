/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/src/assets/hero-bg.png')",
      },
      spacing: {
        'navbar': '80px',
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#473BF0',
        brandGreen: '#68D585',
      },
    },
    container: {
      center: true,
      screens: {
        lg: '1110px',
      },
    },
  },
  plugins: [],
};
