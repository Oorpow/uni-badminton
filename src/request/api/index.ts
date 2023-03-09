const BASE_URL = import.meta.env.VITE_HTTP_SERVER + '/api'

type METHOD = 'GET' | 'POST' | 'DELETE'

export const opRequest = ({ url, data = {}, method }: {url: string, data?: any, method: METHOD}) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: BASE_URL + url,
			method,
			data,
			success: res => {
				resolve(res.data)
			},
			fail: (err) => {
				reject(err)
			},
			complete: () => {}
		})
	})
}
