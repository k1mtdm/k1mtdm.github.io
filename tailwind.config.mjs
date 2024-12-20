import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      center: true,
    },

    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },

    extend: {
      colors: {
        'ne-green': '#39ff14',
        'ne-blue': '#1484FF',
        'ne-orange': '#FFAA14',
        'ne-yellow': '#d9eb4b',
        pink: '#FF14C2',
        white: '#f8f8f8',
        black: '#2c2c2c',
        gainsboro: '#e0e0e0',
        'hero-orange': '#FF3C00',
        'hero-lime': '#D0FF4C',
      },

      fontFamily: {
        sans: [
          'Inter Variable',
          'Noto Sans JP Variable',
          ...defaultTheme.fontFamily.sans,
        ],
        roboto: [
          'Roboto',
          'Noto Sans JP Variable',
          ...defaultTheme.fontFamily.sans,
        ],

        mont: [
          'Montserrat Alternates',
          'Noto Sans JP Variable',
          ...defaultTheme.fontFamily.sans,
        ],

        anton: [
          'Anton',
          'Noto Sans JP Variable',
          ...defaultTheme.fontFamily.sans,
        ],

        poppins: [
          'Poppins',
          'Noto Sans JP Variable',
          ...defaultTheme.fontFamily.sans,
        ],
      },

      animation: {
        'shake-lr':
          'shake-lr 3s cubic-bezier(0.455, 0.030, 0.515, 0.955) 2s infinite alternate both',
        marquee: 'marquee 20s linear infinite',
        marquee2: 'marquee2 20s linear infinite',
      },
      keyframes: {
        'shake-lr': {
          '0%,to': {
            transform: 'rotate(0deg)',
            'transform-origin': '50% 50%',
          },
          '10%,90%': {
            transform: 'rotate(8deg)',
          },
          '20%,40%,60%': {
            transform: 'rotate(-10deg)',
          },
          '30%,50%,70%': {
            transform: 'rotate(10deg)',
          },
          '80%': {
            transform: 'rotate(-8deg)',
          },
        },

        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },

  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',

          '@screen sm': {
            maxWidth: '700px',
          },
          '@screen md': {
            maxWidth: '900px',
          },
          '@screen lg': {
            maxWidth: '1000px',
          },
          '@screen xl': {
            maxWidth: '1200px',
          },
        },
      });
    },
  ],
};
