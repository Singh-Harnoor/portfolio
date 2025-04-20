import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: 'portfolio', // 👈 Required for GitHub Pages
  plugins: [vue()],
})