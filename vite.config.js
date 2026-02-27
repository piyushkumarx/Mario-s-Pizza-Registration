import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Isse Vite aapke local network par listen karega
    allowedHosts: [
      'background-prague-morris-roommates.trycloudflare.com', // Aapka current URL
      '.trycloudflare.com' // Future ke saare tunnels ke liye (Recommended)
    ]
  }
})