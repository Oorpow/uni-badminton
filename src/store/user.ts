import {defineStore} from 'pinia'
import type {IUserInfo} from '@/pages/my/types'
import {createUserByForm} from '@/request/api/user'

export const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: <IUserInfo>{}
  }),
  actions: {
    async createUser(form: IUserInfo) {
      try {
        // const res = await createUserByForm(form)
        // console.log(res)
      } catch (e) {

	  }
    },
    updateUserInfo(info: IUserInfo) {
      this.userInfo = Object.assign({}, this.userInfo, info)
	    this.setUserInfoStorage(info)
    },
    // 用户信息存入缓存
    setUserInfoStorage(info: IUserInfo) {
      uni.setStorageSync('user', info)
    },
    setOpenId(openid: string) {
      uni.setStorageSync('openid', openid)
    }
  },
  getters: {
    getUserInfoStorage() {
      return uni.getStorageSync('user')
    },
    getOpenId() {
      return uni.getStorageSync('openid')
    }
  }
})
