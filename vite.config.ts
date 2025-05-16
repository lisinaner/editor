import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import Pages from 'vite-plugin-pages'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    Pages(),
  ],
  resolve: {
    alias: {
      "@tiptap/core/jsx-dev-runtime": "@tiptap/core/jsx-runtime",
    },
  },
})
