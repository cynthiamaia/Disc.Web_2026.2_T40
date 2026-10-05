import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server : {
    port: 3000 //Vite, quando iniciar seu servidor de desenvolvimento, use a porta 3000.
  }
})
