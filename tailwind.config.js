/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/*.html"],
  theme: {
    extend: {
      keyframes:{
        aboutImage:{
          '0%,100%' : {transform: 'scale(.9)',borderRadius:' 4% 95% 6% 95% / 95% 4% 92% 5%' },
          '50%' :{ transform:'scale(.8)' , borderRadius :'95% 4% 97% 5% / 4% 94% 3% 95%;' }
        }
      },
      animation:{
        'aboutImage' : 'aboutImage 4s linear infinite'
      },

      borderRadius:{
        'radius':'95% 4% 97% 5% / 4% 94% 3% 95%',
        'radius-hover':'4% 95% 6% 95% / 95% 4% 92% 5%'
      },
      colors:{
        'primary' : '#e6a756',
        'primary-dark' : 'rgba(0, 0, 0, 0.175)',
        'primary-light' : '#fff3cd',
        'primary-light-2' : '#f6e1c5',
        'hover':'#b88645',
        'gray-1':'#adb5bd',
        'dark':'#2F170F',
        'dark-2':'#52352b'
      },
      fontFamily : {
        Raleway :'Raleway',
        Lora : 'Lora'
      }
    },
  },
  plugins: [],
}

