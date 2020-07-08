<template>
		<view class="goods-list">
			<view class="goods-item" v-for="(elem, i) of goods" :key="elem.id" @click="goToDetail(elem.id)">
				<image :src="elem.img_url" ></image>
				<view class="price">
					<text>￥{{elem.sell_price}}</text>
					<text>￥{{elem.market_price}}</text>
				</view>
				<view class="name">
					{{elem.title}}
				</view>
			</view>
		</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:["goods"],
		methods:{
			goToDetail(id){
				this.$emit('goDetail', id)
			}
		},
	}
</script>

<style lang="scss">
	.goods-list{
		padding: 0 15rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		> .goods-item{
			width: 355rpx;
			background-color: #fff;
			overflow: hidden;
			margin-top: 10px;
			padding: 15rpx;
			box-sizing: border-box;
			> image{
				width: 80% ;
				height: 150px;
				display: block;
				margin: 10px auto;
			}
			>.price{
				color:$shop-color;
				font-size: 36rpx;
				margin: 20rpx 0 5rpx 0;
				> text:nth-child(2){
					color: #ccc;
					text-decoration: line-through;
					margin-left: 9rpx;
					font-size: 28rpx;
				}
			}
			
			>.name{
				font-size: 28rpx;
				line-height: 50rpx;
				padding-top: 10rpx;
				padding-bottom: 15rpx;
			}
			
		}
	}
</style>
