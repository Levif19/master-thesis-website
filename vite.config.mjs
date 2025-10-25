import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ESM-compatible config for GitHub Pages deployment
export default defineConfig({
  plugins: [react()],
  base: '/master-thesis-website/',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
  server: {
    open: true,
    port: 5173
  }
})