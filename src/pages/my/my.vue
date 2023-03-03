<template>
  <view>
	  <button @click="login">立即登录</button>
  </view>
</template>

<script setup lang="ts">
// 登录
const login = () => {
	// uni.login({
	// 	provider: 'weixin',
	// 	success: (res) => {
	// 		console.log(res)
	// 	}
	// })
	
	// uni.getUserProfile({
	// 	desc: '登录授权',
	// 	lang:'zh_CN',
	// 	success: (res) => {
	// 		console.log(res)
	// 	}
	// })
}
</script>

<style lang="scss" scoped></style>
