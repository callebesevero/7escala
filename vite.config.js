import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        // Nome: caminho do arquivo
        main: resolve(__dirname, 'index.html'),
        comunicacao: resolve(__dirname, 'src/pages/comunicacao.html'),
        diaconato: resolve(__dirname, 'src/pages/diaconato.html'),
        escola: resolve(__dirname, 'src/pages/escola-sabatina.html'),
        musica: resolve(__dirname, 'src/pages/musica.html'),
        pregacao: resolve(__dirname, 'src/pages/pregacao.html'),
        sonoplastia: resolve(__dirname, 'src/pages/sonoplastia.html'),
      },
    },
  },
});
