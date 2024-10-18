import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import postcss from 'postcss';
import tailwindcss from 'tailwindcss'; // Import directly as an ES module
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    postcss({
      plugins: [
        react(),
        tailwindcss(), // Use the imported Tailwind CSS function
        autoprefixer(),
      ],
    }),
  ],
});