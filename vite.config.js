import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { copyFileSync } from 'fs'

// Deploy at root (e.g. username.github.io or custom domain)
// 404.html = index.html so GitHub Pages serves the SPA for all routes (e.g. /projects, /about)
function copyIndexTo404() {
  return {
    name: 'copy-404',
    closeBundle() {
      copyFileSync(resolve(__dirname, 'dist/index.html'), resolve(__dirname, 'dist/404.html'))
    },
  }
}

export default defineConfig({
  plugins: [vue(), copyIndexTo404()],
  base: '/',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
