/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
        colors: {
          // New Modern & Clean Palette
          primary: {
            DEFAULT: '#6366F1', // Indigo-500 for a fresh, professional look
            light: '#818CF8',   // Indigo-400
            dark: '#4F46E5',    // Indigo-600
            accent: '#EEF2FF',  // Indigo-50
          },
          secondary: {
            DEFAULT: '#EC4899', // Pink-500 for secondary actions/highlights
            light: '#F472B6',
            dark: '#DB2777',
          },
          neutral: {
            50: '#F9FAFB',  // Gray-50
            100: '#F3F4F6', // Gray-100
            200: '#E5E7EB', // Gray-200
            300: '#D1D5DB', // Gray-300
            400: '#9CA3AF', // Gray-400
            500: '#6B7280', // Gray-500
            600: '#4B5563', // Gray-600
            700: '#374151', // Gray-700
            800: '#1F2937', // Gray-800
            900: '#111827', // Gray-900
          },
          // Semantic Colors (adjusted for new palette)
          success: {
            DEFAULT: '#22C55E', // Green-500
            light: '#4ADE80',
            dark: '#16A34A',
          },
          warning: {
            DEFAULT: '#FBBF24', // Amber-400
            light: '#FCD34D',
            dark: '#F59E0B',
          },
          error: {
            DEFAULT: '#EF4444', // Red-500
            light: '#F87171',
            dark: '#DC2626',
          },
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          mono: ['Roboto Mono', 'monospace'], // Added for code snippets, if any
        },
        spacing: {
          '0.5': '0.125rem', // 2px
          '1': '0.25rem',    // 4px
          '1.5': '0.375rem', // 6px
          '2': '0.5rem',     // 8px
          '2.5': '0.625rem', // 10px
          '3': '0.75rem',    // 12px
          '3.5': '0.875rem', // 14px
          '4': '1rem',       // 16px
          '5': '1.25rem',    // 20px
          '6': '1.5rem',     // 24px
          '7': '1.75rem',    // 28px
          '8': '2rem',       // 32px
          '9': '2.25rem',    // 36px
          '10': '2.5rem',    // 40px
          '11': '2.75rem',   // 44px
          '12': '3rem',      // 48px
          '14': '3.5rem',    // 56px
          '16': '4rem',      // 64px
          '20': '5rem',      // 80px
          '24': '6rem',      // 96px
          '28': '7rem',      // 112px
          '32': '8rem',      // 128px
          '36': '9rem',      // 144px
          '40': '10rem',     // 160px
          '44': '11rem',     // 176px
          '48': '12rem',     // 192px
          '52': '13rem',     // 208px
          '56': '14rem',     // 224px
          '60': '15rem',     // 240px
          '64': '16rem',     // 256px
          '72': '18rem',     // 288px
          '80': '20rem',     // 320px
          '96': '24rem',     // 384px
        },
        boxShadow: {
          'xs': '0 1px 1px rgba(0, 0, 0, 0.05)',
          'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
          'md': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
          'lg': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          'xl': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          '2xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
          'none': 'none',
          'custom-light': 'rgba(0, 0, 0, 0.08) 0px 4px 12px',
          'custom-medium': 'rgba(0, 0, 0, 0.12) 0px 6px 18px',
          'custom-dark': 'rgba(0, 0, 0, 0.16) 0px 8px 24px',
        },
        borderRadius: {
          'none': '0',
          'sm': '0.125rem',
          'md': '0.375rem',
          'lg': '0.5rem',
          'xl': '0.75rem',
          '2xl': '1rem',
          '3xl': '1.5rem',
          'full': '9999px',
        },
        transitionProperty: {
          'height': 'height',
          'spacing': 'margin, padding',
        },
        transitionDuration: {
          'DEFAULT': '200ms',
          '150': '150ms',
          '200': '200ms',
          '300': '300ms',
          '500': '500ms',
        },
        transitionTimingFunction: {
          'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
          'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
          'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          slideInFromLeft: {
            '0%': { transform: 'translateX(-100%)' },
            '100%': { transform: 'translateX(0)' },
          },
        },
        animation: {
          fadeIn: 'fadeIn 0.3s ease-out forwards',
          slideInFromLeft: 'slideInFromLeft 0.3s ease-out forwards',
        },
      },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-filters'),
  ],
}