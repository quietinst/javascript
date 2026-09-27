import { defineConfig } from 'vite';
import { globSync } from 'glob';

export default defineConfig({
  // Relative asset paths make every copied module work on GitHub Pages.
  base: './',
  // Some npm packages reference Node's `global`, which doesn't exist
  // in the browser — map it to `globalThis`.
  define: {
    global: 'globalThis',
  },
  build: {
    rollupOptions: {
      // Every HTML file in this folder becomes a built page.
      input: globSync('*.html'),
    },
  },
});
