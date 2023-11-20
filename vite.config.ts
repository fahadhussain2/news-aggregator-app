import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
    },
  },
  server: {
    host: true,
    port: 3001
  },
  preview: {
    host: true,
    port: 3001
  },
  define:{
    "process.env": process.env
  }
})
