/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        kucing: 'url("../public/kucing.jpeg")',

        oyen: 'url("../public/oyen.jpeg")',
        logoalnassr: 'url("../public/alnassr .jpg")',
        FCBarcelona: 'url("../public/FCBarcelona.png")',
        TarraBudiman: 'url("../public/TarraBudiman.jpg")',
        priadewasa: 'url("../public/priadewasa.jpg")',
      },
      fontFamily: {
        Lobster: "Lobster",
        Dancing: "Dancing",
        Honk: "Honk",
      },
      fontSize: {
        agakbesar: "102px",
      },
    },
  },
  plugins: [],
};
