import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://k1mtdm.github.io/',
  integrations: [tailwind(), icon()]
});

module.exports = {
  plugins: [
    require('postcss-preset-env')({
      stage: 1,
      features: {
        'nesting-rules': true
      }
    })
  ]
}