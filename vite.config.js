import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import imagemin from 'vite-plugin-imagemin';
import compression from 'vite-plugin-compression';

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (asset) => {
          let ext = asset.name.split('.').at(1);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            ext = 'img';
          }
          return `assets/${ext}/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
  },
  plugins: [
    react(),
    imagemin({
      gifsicle: {
        optimizationLevel: 3,
      },
      mozjpeg: {
        quality: 80,
      },
      pngquant: {
        speed: 1,
        strip: true,
      },
    }),
    compression(),
    compression({
      algorithm: 'brotliCompress',
      ext: 'br',
    }),
  ],
});
