import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // Vercel waits for the Node process to exit; Vite 8 can leave handles open on Linux builders.
    {
      name: 'force-exit-after-build',
      apply: 'build',
      closeBundle() {
        setTimeout(() => process.exit(0), 0);
      },
    },
  ],
});
