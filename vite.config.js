import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    hmr: {
      host: 'localhost',
      protocol: 'ws',
      port: 5173,
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'swiper', 'swiper/react', 'swiper/modules'],
  },
  build: {
    chunkSizeWarningLimit: 600, // Aumenta o limite para 600 kB
  },
})
