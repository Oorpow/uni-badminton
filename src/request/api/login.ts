import { REQUEST_METHOD } from "@/common/constants";

export const userWxLogin = (code: string) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${import.meta.env.VITE_HTTP_SERVER}/wechat/login?code=${code}`,
			method: REQUEST_METHOD.GET,
			success: (res) => {
				resolve(res.data)
			},
			fail: (err) => {
				reject(err)
			}
		})
	})
}
