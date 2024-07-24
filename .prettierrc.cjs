// @ts-check

/** @type {import('prettier').Options} */
module.exports = {
    printWidth: 80,
    tabWidth: 2,
    singleQuote: true,
    plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
    overrides: [
      {
        files: "*.astro",
        options: {
          parser: "astro",
        },
      },
    ],
  };