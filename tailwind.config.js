/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens:{
      sm:"480px",
      md:"768px",
      lg:"1024"
    },
    extend: {
      spacing: {
        '18': '4.5rem',
      },
      fontFamily: {
        'nanum-myeongjo': ['Nanum Myeongjo', 'serif'],
        'playfair-display-sc': ['Playfair Display SC', 'serif'],
        'playfair-display': ['Playfair Display', 'serif'],
      }
    },
    container:{
      center: true,
      padding:{
        DEFAULT: '1rem',
        sm: '1.5rem',
      } 
    }
  },
  
  plugins: [],
}