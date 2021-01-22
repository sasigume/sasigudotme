const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  purge: {
    content: ['./src/pages/**/*.ts', './src/components/**/*.ts', './src/pages/**/*.tsx', './src/components/**/*.tsx'],
    options: {
      safelist: ['bg-level-1', 'bg-level-2', 'bg-level-3', 'bg-level-4'],
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '3rem',
        md: '5rem',
        xl: '8rem',
      },
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      'up': '0 0px 25px 20px rgba(180,180,180, 0.15), 0 0px 10px 0px rgba(255, 255, 255, 0.21)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
      focus: '0 0 0 3px rgba(66, 153, 225, 0.5)',
      none: 'none',
    },
    borderRadius : {
      'skill': '1rem',
      'lg': '5rem',
      'xl': '8rem'
    },
    extend: {
      colors: {
        'level-1': '#eeffac',
        'level-2': '#cbffaa',
        'level-3': '#f1ceff',
        'level-4': '#ffcee2',
        'sasibg': 'var(--color-and0ry0)',
        'sasifont': 'var(--color-sasifont)'
      },
      minHeight: {
        '0': '0',
        '40': '10rem',
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  variants: {
    extend: {
      margin: ['last', 'first'],
      borderWidth: ['last', 'first']
    }
  },
  plugins: [],
}
