import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        host: '0.0.0.0', // Your machine's external IP or '0.0.0.0' to be available in your local network
        port: 3001,
    },
});
