import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
export default defineConfig({
  // ... suas outras configurações
  build: {
    chunkSizeWarningLimit: 600, // Aumenta o limite para 600 kB por exemplo
  },
})