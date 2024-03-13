
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       fontFamily:{
         opensans:["Open Sans", "sans-serif"],
         cairo:["cairo", "sans-serif"],
         popin:["Poppins","sans-serif"],
         source:["Source Sans 3","sans-serif"]
       },
       
      colors:{
        bgNavbar:"#202020",
        Navbarhover:"#F01A2A",
        featurecard:"#232532",
      

        contactus:"#272727",
        form:"#202020",
        formInput:"#343434",
        label:"#C1C1C1",
        footerbg:"#1A1A1A",
        footerText:"#92989F",
        footerBreakLine:"#71777D",
        testinomialCard:"#FFFFFF03",
        testinomialBg:"#1A1A1A",
        testinomialRole:"#D9D9D9",
        AchievementCard:"#667080",
        CoachDetail:"#1A1D1E",
        MedalWinner:"#FAFAF9",
        MedalAddress:"#EFEDE8A6",
        MedalBg:"#171717"
        
      
    
      
      }
    },
  },
  plugins: [],
}