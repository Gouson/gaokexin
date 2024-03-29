import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import viteSvgIcons from 'vite-plugin-svg-icons';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    viteSvgIcons({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      // 指定symbolId格式
      symbolId: '[name]',
    })
  ]
})
