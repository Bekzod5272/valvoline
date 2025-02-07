// /** @type {import('tailw:.Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{vue,js,html}"],
  theme: {
    extend: {
      colors: {
        main: "rgb(0, 122, 111)",
        servicesLight: '#F8F8F8',
        servicesDark: '#171717',
      },
      boxShadow: {
        custom: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px',
        darkCustom: 'rgb(251 251 251 / 10%) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 9px, rgba(17, 17, 26, 0.1) 0px 16px 5px'
      },
      backgroundImage: {
        'how-work-back': "linear-gradient(to bottom, #007A6F1A 20%, rgba(247, 247, 247, 0.9) 40%, rgba(255, 255, 255, 0.7) 80%, #007A6F1A 100%)",
        'how-work-back-dark': "linear-gradient(to bottom, #007A6F99 20%, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0.7) 50%, #007A6F99 100%)",
      },
    },
    screens: {
      phone: "320px",
      phone2: "400px",
      poco: "480px",
      poco2: "560px",
      sm: "640px",
      sm2: "720px",

      md: "780px",
      md2: "860px",
      semimd: "960px",
      lg: "1024px",

      xl: "1100px",
      semibig: "1190px",
      big: "1300px",
      big2: "1360px",
      big3: "1400px",
      "1xl": "1490px",
      "2xl": "1560px",
    },
    container: {
      center: true,
    },
  },
  plugins: [],
  darkMode: "class",
};
