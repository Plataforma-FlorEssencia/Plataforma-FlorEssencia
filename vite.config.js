import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // ou coloque '0.0.0.0'
    port: 5173, // você pode alterar para qualquer porta disponível
  },
  base:"/Plataforma-FlorEssencia"
});




  