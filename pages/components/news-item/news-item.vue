<template>
	<view>
		<view class="news-item" v-for="(elem, i) of newsItemList" :key="i" @click="navigate(elem.id)">
			<image :src="elem.img_url"></image>
			<view class="right">
				<view class="tit">
					{{elem.title}}
				</view>
				<view class="info">
					<text>
						发表时间：{{elem.add_time | tiemFilter}}
					</text>
					<text>
						浏览：{{elem.click}}
					</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			navigate(id){
				this.$emit("goDetail", id)
			}
		},
		filters:{
			
		},
		props:["newsItemList"]
	}
</script>

<style lang="scss">
	.news-item{
		display: flex;
		padding: 10rpx 20rpx;
		border-bottom: 1px solid $shop-color;
		image{
			height: 150rpx;
			max-width: 200rpx;
			min-width: 200rpx;
		}
		.right{
			padding-left: 20rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.tit{
				font-size: 30rpx;
				line-height: 50rpx;
			}
			.info{
				font-size: 25rpx;
				line-height: 35rpx;
				text:nth-child(2){
					margin-left: 50rpx;
				}
			}
		}
	}
</style>
