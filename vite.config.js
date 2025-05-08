import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '', // ✅ leave this empty for Cloudflare Pages
  plugins: [react()],
});
