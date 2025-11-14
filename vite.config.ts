import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Для локальної розробки (dev server) використовуємо '/'
  // Для production build використовуємо '/Portfolio/' для GitHub Pages
  // Якщо base передається через --base в команді, він має пріоритет
  const isDev = command === 'serve';
  const base = isDev ? '/' : '/Portfolio/';
  
  return {
    plugins: [react()],
    resolve: { alias: { '@': path.resolve(__dirname, './src') } },
    base: base,
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    },
    server: {
      port: 5173,
    },
  };
})
