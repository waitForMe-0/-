<template>
	<view class="pics">
		<scroll-view class="left"  scroll-y="true">
			<view v-for="(elem, i) of cates" :key="i" :class="active===i ? 'active' : ''" @click="clickItem(i,elem.id)">{{elem.title}}</view>
		</scroll-view>
		<scroll-view class="right" scroll-y="true" >
			<view  class="item" v-for="(elem, i) of secondData" :key="i">
				<image @click="clickImage(elem.img_url)" :src="elem.img_url" mode=""></image>
				<view>{{elem.title}}</view>
			</view>
			<text v-if="secondData.length === 0">暂无数据</text>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data (){
			return {
				cates: new Array(),
				active: 0,
				secondData: []
			}
		},
		methods:{
			getPicsCate(){
				this.$myRequist({
					url:'/api/getimgcategory'
				}).then(res=>{
					this.cates = res.data.message;
					this.clickItem(0,res.data.message[0].id)
				})
			},
			clickItem(i,cateid){
				this.active = i;
				this.$myRequist({
					url: "/api/getimages/"+ cateid,
				}).then(res => {
					this.secondData = res.data.message;
				})
			},
			clickImage(current){
				let urls = []
				this.secondData.forEach((elem,i,arr)=>{
					urls.push(elem.img_url)
				})
				uni.previewImage({
					current,
					urls
				})
			}
		},
		onLoad() {
			this.getPicsCate()
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
	}
	.pics{
		height: 100%;
		display: flex;
		>.left{
			width: 200rpx;
			height: 100%;
			border-right: 1px solid #eee;
			
			view{
				height: 60px;
				line-height: 60px;
				text-align: center;
				border-top: 1px solid #eee;
			}
		}
		.right{
			height: 100%;
			width: 520rpx;
			padding-top: 10rpx;
			margin: 0 auto;
			.item{
				margin-bottom: 40rpx;
				image{
					width: 520rpx;
					height: 520rpx;
					border-radius: 5px;
				}
				view{
					font-size: 30rpx;
					line-height: 60rpx;
				}
			}
		}
	}
	.active{
		background-color: $shop-color;
		color: #fff;
	}
</style>
