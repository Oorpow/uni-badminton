
let __unconfig_data;
let __unconfig_stub = function (data = {}) { __unconfig_data = data };
__unconfig_stub.default = (data = {}) => { __unconfig_data = data };
import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import uni from '@dcloudio/vite-plugin-uni'

// https://vitejs.dev/config/
const __unconfig_default =  defineConfig({
	plugins: [
		uni(),
		Components({
      resolvers: [VantResolver()],
    }),
	],
})

if (typeof __unconfig_default === "function") __unconfig_default(...[{"command":"serve","mode":"development"}]);export default __unconfig_data;