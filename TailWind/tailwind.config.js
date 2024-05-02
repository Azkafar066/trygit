/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./public/**/*.{html,js}", 
  "node_modules/preline/dist/*.js"
],
  theme: {
    extend: {
      backgroundImage: { 
       FastFood:'url("../public/FastFood.jpg")', 
        logoabudzar:'url("../public/logoabudzar.png")',
        kucing: 'url("../public/kucing.jpeg")',
        summerbeach:'("../public/summerbeach.png")',
        oyen: 'url("../public/oyen.jpeg")',
        logoalnassr: 'url("../public/alnassr .jpg")',
        FCBarcelona: 'url("../public/FCBarcelona.png")',
        TarraBudiman: 'url("../public/TarraBudiman.jpg")',
        priadewasa: 'url("../public/priadewasa.jpg")',
        vecteezymountain: 'url("../public/vecteezymountain.jpg")',
        illustrationvecteezymountain:
          'url("../public/-illustrationvecteezymountain.jpg")',
        mountain: 'url("../public/mountain.jpg")',
        Cheeseburger:'url("../public/Cheeseburger.jpg")',
      },
      fontFamily: {
       Honk:"Honk", 
        Lobster: "Lobster",
        Dancing: "Dancing",
        Honk: "Honk",
        Sevillana:"Sevillana", 
      },
      fontSize: {
        agakbesar: "102px",
      },
    },
  },
  plugins: [require('preline/plugin'),],
};
