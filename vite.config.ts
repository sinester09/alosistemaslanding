import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/alosite-simple/', // Cambiar esto por el nombre de tu repositorio
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
});
