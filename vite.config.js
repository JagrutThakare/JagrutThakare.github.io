import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Set to '/' for User Pages (username.github.io) or '/repo-name/' for Project Pages
})
