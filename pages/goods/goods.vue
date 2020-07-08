<template>
	<view class="goos-list">
		<goods-list :goods="goods" @goDetail="goGoosDetail"></goods-list>
		<view v-if="isOver" class="flag">-----我是有底线的-----</view>
	</view>
</template>

<script>
	import goodsList from "../components/goods-list/goods-list.vue"
	export default {
		data(){
			return {
				pageIndex: 1,
				goods: [],
				isOver: false
			}
		},
		components:{
			"goods-list": goodsList
		},
		methods:{
			//  请求商品列表数据
			getGoodsList(refresh){
				this.$myRequist({
					url: "/api/getgoods",
					data: {
						pageindex: this.pageIndex,
					}
				}).then(res =>{
					this.goods = this.goods.concat(res.data.message)
					refresh && refresh()
				})
			},
			//跳转商品详情页
			goGoosDetail(id){
				uni.navigateTo({
					url: "/pages/goGoosDetail/goGoosDetail?id="+id
				})
			}
		},
		onLoad(){
			this.getGoodsList()
		},
		onReachBottom() {
			if(this.goods.length < this.pageIndex*10) return this.isOver = true;
			this.pageIndex++;
			this.getGoodsList()
		},
		onPullDownRefresh(){
			this.pageIndex = 1;
			this.goods = [];
			this.getGoodsList(()=>{
				uni.startPullDownRefresh()
			})
		}
	}
</script>

<style lang="scss">
	.goos-list{
		background-color: #ccc;
		> .flag{
			height: 50px;
			line-height: 50px;
			font-size: 28rpx;
			width: 100%;
			text-align: center;
			background-color: #fff;
			margin-top: 10px;
			opacity: 0.2;
			letter-spacing: 20rpx;
		}
	}
</style>
