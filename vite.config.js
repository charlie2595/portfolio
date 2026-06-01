import { defineConfig } from 'vite'

export default defineConfig({
  base: '/portfolio/',

  build: {
    target: 'esnext',
    minify: 'esbuild',
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined,
      }
    }
  },

  server: {
    port: 3000,
    open: true
  }
})