import type { IUserInfo } from '@/pages/my/types'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
	state: () => ({
		userInfo: <IUserInfo>{}
	}),
	actions: {
		updateUserInfo(info: IUserInfo) {
			this.userInfo = Object.assign({}, this.userInfo, info)
			console.log(this.userInfo)
		}
	}
})
