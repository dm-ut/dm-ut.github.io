/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './_includes/**/*.{html,md}',
      './_layouts/**/*.{html,md}',
      './_posts/**/*.{html,md}',
      './_years/**/*.{html,md}',
      './*.{html,md}',
    ],
    theme: {
      extend: {
        colors:{
            "primary": {
              "50": "#EAEBF8",
              "100": "#cfcfd5",
              "200": "#9e9faa",
              "300": "#6e7080",
              "400": "#3d4055",
              "500": "#0d102b",
              "600": "#0a0d22",
              "700": "#080a1a",
              "800": "#050611",
              "900": "#030309"
            }
        },      },
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }
  