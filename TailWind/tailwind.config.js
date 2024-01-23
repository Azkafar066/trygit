/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
     kucing:'url("../public/kucing.jpeg")', 
     oyen:'url("../public/oyen.jpeg")',
      logoalnassr:'url("../public/alnassr\ .jpg")',
      },
      fontFamily:{
        'Lobster':'Lobster',
       'Dancing' :'Dancing', 
      },
      fontSize:{
     agakbesar:"102px"   
      }
    },
  },
  plugins: [],
}

