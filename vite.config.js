import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: './', // relative paths work when serving from root
  plugins: [vue()],
  assetsInclude: ['**/*.3gp'],
})
