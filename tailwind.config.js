/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['Pretendard', 'sans-serif'],
      },
      fontSize: {
        'home-div': ['78px', { lineHeight: '126.3%', letterSpacing: '-1.56px' }],
        'home-button': ['24px', { lineHeight: '137%', letterSpacing: '-0.48px' }],
      },
      width: {
        '972': '972px',
        '384': '384px',
      },
      height: {
        '611': '611px',
        '90': '90px',
      },
      padding: {
        '67': '67px',
      },
      backgroundImage: {
        'home-bg': "url('./assets/images/bg_main.svg')",
        'home-button': 'linear-gradient(92deg, rgba(255, 255, 255, 0.30) 0.48%, rgba(255, 255, 255, 0.60) 99.34%)',
      },
      boxShadow: {
        'home-button':'0px 0px 30px 4px rgba(219, 212, 223, 0.50)',
        'home-button-hover':'0px 0px 30px 6px rgba(0, 0, 0, 0.50)',
      }
    },
  },
  plugins: [],
};
