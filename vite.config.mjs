import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Make sure this base matches your repo name exactly
export default defineConfig({
  plugins: [react()],
  base: '/master-thesis-website/',
})