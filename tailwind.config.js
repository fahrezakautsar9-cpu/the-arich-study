/** Build-time Tailwind config. The deployed site uses the generated app.css. */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './app.js',
    './features_*.js',
    './data/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca'
        },
        dark: {
          950: '#090d16',
          900: '#0f1422',
          850: '#141b2d',
          800: '#1a233a',
          750: '#222d4a',
          700: '#2b395c'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      }
    }
  },
  plugins: []
};
