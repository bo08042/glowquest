import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base 對應 GitHub Pages 的 repo 路徑：https://<username>.github.io/doubyeplan/
// 若日後改用自訂網域，將 base 改回 '/'
export default defineConfig({
  base: '/doubyeplan/',
  plugins: [react(), tailwindcss()],
})
