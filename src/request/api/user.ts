import { opRequest } from ".";
import { REQUEST_METHOD } from "@/common/constants";
import type { IUserInfo } from "@/pages/my/types";
import type { EncryptedData } from "../types";

export const createUserByForm = (form: IUserInfo) => opRequest({
	url: '/user/add',
	method: REQUEST_METHOD.POST,
	data: form
})

// 获取用户信息
export const getCryptedUserInfo = (data: EncryptedData) => {
  return new Promise((resolve, reject) => {
    uni.request({
      url: `${import.meta.env.VITE_HTTP_SERVER}/wechat/getUserInfo`,
      method: REQUEST_METHOD.POST,
      data,
      success: (res) => {
        resolve(res)
      },
      fail: (err) => {
        reject(err)
      }
    })
  })
}
