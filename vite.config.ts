import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import UnoCSS from 'unocss/vite'
import extractorSvelte from '@unocss/extractor-svelte'
import pkg from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  base: `/${pkg.name}/`,
  plugins: [
    UnoCSS({
      extractors: [
        extractorSvelte()
      ]
    }),
    svelte()
  ]
})
