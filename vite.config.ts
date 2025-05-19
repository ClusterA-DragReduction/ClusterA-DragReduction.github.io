import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // 使用根路径以确保正确访问静态资源
  build: {
    outDir: 'docs' // 将输出目录改为docs
  }
})
