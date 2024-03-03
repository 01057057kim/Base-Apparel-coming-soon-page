/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        'd-red' : 'hsl(0, 36%, 70%)',
        's-red' : 'hsl(0, 93%, 68%)',

        'd-g-red' : 'hsl(0, 6%, 24%)',

        'linear1' : 'hsl(0, 0%, 100%)',
        'linear1-1' : 'hsl(0, 100%, 98%)',

        'linear2' : 'hsl(0, 80%, 86%)',
        'linear2-1' : 'hsl(0, 74%, 74%)',
      },
      fontFamily :
      {
        'josefin' : 'Josefin Sans , sans-serif',
      },
    },
  },
  plugins: [],
}
