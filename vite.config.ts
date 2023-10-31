import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dotenv from 'dotenv';
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = dotenv.config({ path: `environments/.env.${mode}` }).parsed;

  return {
    plugins: [
      react(),
      legacy()
    ],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/setupTests.ts',
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    define: {
      'process.env': env,
    },
  }
})
