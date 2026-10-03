import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

const PORT_NUMBER :number= 8080

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: PORT_NUMBER,
    strictPort: false,
  },
})
