// Thème Tailwind de l'appli. La feuille tw.css se reconstruit avec : node construire-css.js
module.exports = Object.assign({
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'Segoe UI', 'sans-serif'],
          },
          colors: {
            brand: {
              50: '#ecfdf5',
              100: '#d1fae5',
              500: '#10b981',
              600: '#059669',
              700: '#047857',
            },
            water: {
              50: '#eff6ff',
              100: '#dbeafe',
              500: '#0ea5e9',
              600: '#0284c7',
            }
          }
        }
      }
    }, { content: [__dirname + '/index.html'] });
