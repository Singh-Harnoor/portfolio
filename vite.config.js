import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/portfolio/',  // <-- use your repo name here
  plugins: [vue()]
})
