import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: './',   // ✅ relative paths for main branch root
  plugins: [vue()],
})
