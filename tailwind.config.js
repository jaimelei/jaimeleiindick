module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        montserrat_medium: ["Montserrat-Medium", "sans-serif"],
        kalayaan: ["Kalayaan", "sans-serif"],
        squada: ["Squada", "sans-serif"],
      },
      backgroundImage: {
        'experience': "url('../public/assets/images/backgrounds/work-experience.png')",
        'landing': "url('../public/assets/images/backgrounds/landing-page.png')",
        'portfolio': "url('../public/assets/images/backgrounds/portfolio.png')",
        'skills': "url('../public/assets/images/backgrounds/skills.png')",
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
