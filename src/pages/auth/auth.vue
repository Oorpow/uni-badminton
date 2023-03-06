<template>
	<view class="auth">
		<view class="auth_container">
			<view class="auth_container_avatar">
				<CusAvatar :url="userInfo.avatarUrl" size="large"></CusAvatar>
				<view class="avatar-upload">
					<uni-file-picker limit="1" :del-icon="false" disable-preview :imageStyles="imageStyles"
						file-mediatype="image">
						上传</uni-file-picker>
					<uni-icons type="forward"></uni-icons>
				</view>
			</view>
			<!-- 表单 -->
			<view class="auth_container_form">
				<uni-forms ref="valiForm" :rules="rules" :modelValue="valiFormData" labelPosition="top">
					<uni-forms-item label="姓名" required name="name">
						<uni-easyinput v-model="valiFormData.name" placeholder="请输入姓名" />
					</uni-forms-item>
					<uni-forms-item label="性别" required>
						<uni-data-checkbox v-model="valiFormData.gender" :localdata="sexs" />
					</uni-forms-item>
					<uni-forms-item label="年龄" required name="age">
						<uni-easyinput v-model="valiFormData.age" placeholder="请输入年龄" />
					</uni-forms-item>
					<uni-forms-item label="自我介绍" name="introduction">
						<uni-easyinput type="textarea" v-model="valiFormData.introduction" placeholder="请输入自我介绍" />
					</uni-forms-item>
				</uni-forms>
				<button type="primary" class="auth_container_form-btn" @click="submit('valiForm')">提交</button>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
	import {
		reactive,
		ref
	} from 'vue'
	import {
		storeToRefs
	} from 'pinia'
	import themeConfig from '../../common/theme/theme.module.scss'
	import {
		useUserStore
	} from '@/store/user'

	const userStore = useUserStore()
	const {
		userInfo
	} = storeToRefs(userStore)

	const imageStyles = {
		width: 64,
		height: 64,
		border: false
	}

	const rules = {
		name: {
			rules: [{
				required: true,
				errorMessage: '姓名不能为空'
			}]
		},
		age: {
			rules: [{
				required: true,
				errorMessage: '年龄不能为空'
			}, {
				format: 'number',
				errorMessage: '年龄只能输入数字'
			}]
		}
	}

	const sexs = reactive([{
		value: 0,
		text: '男'
	}, {
		value: 1,
		text: '女'
	}])
	const valiFormData = reactive({
		name: '',
		age: '',
		introduction: '',
		gender: 0
	})

	const submit = (formName: string) => {}
</script>

<style lang="scss" scoped>
	.auth {
		&_container {

			&_avatar {
				display: flex;
				justify-content: space-between;
				border-bottom: 2rpx solid #ccc;
				padding: 0 20rpx 10rpx 20rpx;

				.avatar-upload {
					display: flex;
					align-items: center;
				}
			}

			&_form {
				margin-top: 20rpx;
				padding: 20rpx;

				&-btn {
					border-radius: 40rpx;
					background-color: v-bind('themeConfig.primaryColor');
				}
			}
		}
	}

	:deep(.uni-file-picker) {
		width: 128rpx;
		flex: none;
	}
</style>
