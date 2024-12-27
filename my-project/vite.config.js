import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/Memorix-page/', // เพิ่มบรรทัดนี้เพื่อระบุว่าโปรเจคจะถูก deploy ที่ GitHub Pages
})