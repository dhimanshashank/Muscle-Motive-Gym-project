import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite';
import postcss from 'postcss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    postcss({
      plugins: [
        react(),
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    }),
  ],
});