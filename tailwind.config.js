module.exports = {
  content: ["./pages/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#2C3E50", // blue-gray-800
        secondary: "#34495E", // blue-gray-700
        accent: "#E74C3C", // red-500
        background: "#FAFBFC", // gray-50
        surface: "#FFFFFF", // white
        text: {
          primary: "#2C3E50", // blue-gray-800
          secondary: "#7F8C8D", // gray-500
        },
        success: "#27AE60", // green-600
        warning: "#F39C12", // orange-500
        error: "#E74C3C", // red-500
      },
      fontFamily: {
        sans: ['Source Sans Pro', 'sans-serif'],
        heading: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontWeight: {
        normal: '400',
        semibold: '600',
        bold: '700',
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        hover: '0 4px 6px rgba(0,0,0,0.1)',
      },
      borderRadius: {
        DEFAULT: '6px',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
      transitionDuration: {
        fast: '200ms',
        medium: '300ms',
        slow: '500ms',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'scale-hover': 'scaleHover 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleHover: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.02)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        navy: {
          700: '#0a192f',
          800: '#0f2742',
          900: '#112240'
        }
      },
      dropShadow: {
        'hero': [
          '0 2px 4px rgba(0, 0, 0, 0.8)',
          '0 1px 2px rgba(0, 0, 0, 0.8)'
        ]
      }
    }
  }
}