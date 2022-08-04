/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'arial':'arial'
      },
      backgroundImage: {
				'fundo-banner': 'url(../img/banner_promo.jpg)'
			},
    },
  },
  plugins: [],
}