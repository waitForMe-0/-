const BASE_URL = "http://localhost:8082"
export const myRequist = ({url,method,data}) => {
	return new Promise((resolve, reject)=>{
		uni.request({
			url: BASE_URL + url,
			method: method || "get",
			data: data || {},
			success: (res)=>{
				if(res.data.status != 0){
					return uni.showToast({
						title: "获取数据失败",
						icon:"none"
					})
				}
				resolve(res);
			},
			fail: (err)=>{
				return uni.showToast({
					title: "请求接口失败",
					icon:"none"
				})
				reject(err)
			}
		})
	})
}