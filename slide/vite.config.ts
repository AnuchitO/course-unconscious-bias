import { defineConfig } from 'vite'

// Slidev's line-number CSS (`--uno` inside ::before) trips lightningcss minify.
export default defineConfig({
  build: { cssMinify: false },
})
