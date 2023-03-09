<template>
	<view class="auth">
		<button form-type="submit" open-type="chooseAvatar" @chooseavatar="uploadAvatar" class="avatar-wrapper">
			<image :src="userForm.avatar" class="avatar" mode="aspectFit"></image>
		</button>
		<view class="nickname-input">
			<text class="nickname-label">昵称</text>
			<input type="nickname" placeholder="请输入昵称" @blur="updateNickname">
		</view>
		<button type="primary" class="submit-button" @click="updateUserInfo">确定修改</button>
	</view>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

import { useUserStore } from '@/store/user'
import type { IUserInfo } from '../my/types'

const userStore = useUserStore()

const userForm = reactive<IUserInfo>({
	avatar: 'https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132',
	name: ''
})

const uploadAvatar = (e: any) => {
	userForm.avatar = e.detail.avatarUrl
}

const updateNickname = (e: any) => {
	userForm.name = e.detail.value
}

const updateUserInfo = () => {
	userStore.updateUserInfo(userForm)
	uni.navigateBack()
}
</script>

<style lang="scss" scoped>
	.auth {
		width: 90vw;
		margin: auto;
		
		.avatar-wrapper {
			width: 200rpx;
			height: 200rpx;
			.avatar {
				width: 100%;
				height: 100%;
			}
		}
		
		.nickname-input {
			padding: 10rpx;
			display: flex;
			margin-top: 50rpx;
			border-top: 2rpx solid #ccc;
			border-bottom: 2rpx solid #ccc;
			
			.nickname-label {
				margin-right: 10rpx;
			}
		}
		
		.submit-button {
			margin-top: 100rpx;
		}
	}
</style>
