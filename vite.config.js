import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: { outDir: 'dist',},
  server: {
    proxy: {
      // Proxy API calls
      '/api': {
        target: 'https://backend-capstone-f39e.onrender.com',
        changeOrigin: true, // Changes the origin of the request to the target URL
        secure: false,      // Set to false if the target is self-signed
        rewrite: (path) => path.replace(/^\/api/, ''), // Remove `/api` prefix if needed
      },
    },
  },
});

