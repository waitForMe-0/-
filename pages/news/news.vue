<template>
	<view class="news">
		<newsItem :newsItemList="newsItemList" @goDetail='goDetail'></newsItem>
	</view>
</template>

<script>
	import newsItem from "../components/news-item/news-item.vue"
	export default {
		components:{
			"newsItem" : newsItem
		},
		data() {
			return {
				newsItemList: []
			}
		},
		methods: {
			getNews(){
				this.$myRequist({
					url: "/api/getnewslist"
				}).then(res=>{
					this.newsItemList = res.data.message
				})
			},
			goDetail(id){
				uni.navigateTo({
					url: "/pages/new-detail/new-detail?id="+id
				})
			}
		},
		onLoad() {
			this.getNews()
		},
		
	}
</script>

<style lang="scss">
	.news{
		
	}
</style>
