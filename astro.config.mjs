// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssCodeSplit: true, // Split CSS for better caching
      rollupOptions: {
        output: {
          // Better file naming for caching
          chunkFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash][extname]'
        }
      },
      // Enable terser minification for smaller bundles
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true, // Remove console logs in production
          drop_debugger: true,
          pure_funcs: ['console.log'] // Remove specific functions
        }
      }
    }
  },
  site: 'https://mndc.dev',
  i18n: {
    locales: ["en", "sr", "de"],
    defaultLocale: "en",
    fallback: {
      sr: "en",
      de: "en"
    },
    routing: {
      fallbackType: "rewrite"
    }
  }
});