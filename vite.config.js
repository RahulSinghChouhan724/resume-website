import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // Use repo base only for production (e.g., GitHub Pages). For local dev, serve at '/'.
  base: mode === 'production' ? '/resume-website/' : '/',
}))
