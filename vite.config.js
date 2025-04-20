import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/portfolio/', // ✅ Make sure it starts and ends with a slash
  plugins: [vue()],
  assetsInclude: ['**/*.3gp'], // ✅ Let Vite know you’re including .3gp files
})