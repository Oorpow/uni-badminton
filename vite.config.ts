import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import uni from '@dcloudio/vite-plugin-uni'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		uni(),
	],
})
