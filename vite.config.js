import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api': "https://papaya-douhua-3e80c4.netlify.app",
    }
  },
  plugins: [react()],
})
