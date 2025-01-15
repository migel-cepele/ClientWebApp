import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port:5173,
    proxy: {
      '/api' : 'http://back-end-service:3000' //per shkak te cors, duhet qe requests ti bejme proxy nga fronti ne back keshtu
    }
  }
})

// https://vitejs.dev/config/
//export default defineConfig({
  //plugins: [react()],
  //server: {
    //host: true,
    //port: 5173, When not running with docker compose, this is the port which will be used in docker
  //}
//})

/*export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      host: "localhost",//'front-end-service', // Kubernetes service name for React
      protocol: 'ws', // Use 'wss' if using HTTPS
      clientPort: 80, // Port where Nginx is listening
    },
    host: '0.0.0.0', // Allow external access
    port: 5173, // React service port
  },
});*/
