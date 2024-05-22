/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          '50': '#fdf3f3',
          '100': '#fce4e4',
          '200': '#fbcdcd',
          '300': '#f6abab',
          '400': '#f08080',
          '500': '#e44f4f',
          '600': '#d03232',
          '700': '#af2626',
          '800': '#912323',
          '900': '#792323',
          '950': '#410e0e',
        },
        'secondary': {
          '50': '#fffbeb',
          '100': '#fff5c6',
          '200': '#ffe988',
          '300': '#ffd43b',
          '400': '#ffc420',
          '500': '#f9a307',
          '600': '#dd7a02',
          '700': '#b75606',
          '800': '#94410c',
          '900': '#7a370d',
          '950': '#461b02',
        },  
        'highlight': {
          '50': '#f0f2fd',
          '100': '#e4e7fb',
          '200': '#cfd4f6',
          '300': '#b1b7f0',
          '400': '#9293e7',
          '500': '#7d77dd',
          '600': '#6c5dce',
          '700': '#5d4db5',
          '800': '#483d8b',
          '900': '#413a75',
          '950': '#272244',
        },
        'light': {
          '50': '#ffffff',
          '100': '#efefef',
          '200': '#dcdcdc',
          '300': '#bdbdbd',
          '400': '#989898',
          '500': '#7c7c7c',
          '600': '#656565',
          '700': '#525252',
          '800': '#464646',
          '900': '#3d3d3d',
          '950': '#292929',
        },
        'dark': {
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          '800': '#454545',
          '900': '#3d3d3d',
          '950': '#000000',
        },
      },
      transitionProperty: {
        'location': 'top, right, bottom, left',
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
  },
  plugins: [],
}