module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#4f46e5',
        secondary: '#e0e7ff'
      },
      backgroundImage: () => ({
        login: 'url(/images/login-bg.jpg)'
      }),
      boxShadow: {
        primary: '0 30px 10px -20px rgba(79, 70, 229, 0.9)',
        secondary: '0 35px 60px -15px rgba(224, 231, 255, 0.3)'
      },
      flex: {
        'login-form': '0 0 75%'
      }
    }
  },
  plugins: []
}
