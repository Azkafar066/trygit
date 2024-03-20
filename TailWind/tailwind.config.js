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
        logoabudzar:'url("../public/logoabudzar.png")',
        kucing: 'url("../public/kucing.jpeg")',
       CheeseBurger:'url("../public/CheeseBurger.jpg")',
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
      },
      fontFamily: {
        
        Quando:"Quando",
        SansitaSwashed:"Sansita swashed",
        BungeeSpice:"Bungee Spice",
        MadimiOne:"Madimi One",
        K2D:"k2D",
        ShantellSans:"Shantell Sans", 
        Honk: "Honk",
        Lobster: "Lobster",
        Dancing: "Dancing",
        Honk: "Honk",
      },
      fontSize: {
        agakbesar: "102px",
      },
    },
  },
  plugins: [require('preline/plugin'),],
};
