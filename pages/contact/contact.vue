<template>
	<view class="contact">
		<image class="img" src="http://www.itcast.cn/2018czydz/images/gywmban.jpg" mode=""></image>
		<view class="info">
				<view @click="makePhone">联系电话：18531053016 (点击拨打)</view>
				<view>地址：河北省邯郸市</view>
		</view>
		<map class="map" 
		:longitude="longitude" 
		:scale="14" 
		:latitude="latitude" 
		:markers="covers"
		:show-compass="true"	
			>
			</map>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				longitude: 115.20104340759279,
				latitude: 36.8128613111107,
				covers:[
					{
						longitude: 115.20104340759279,
						latitude: 36.8128613111107,
						iconPath: "../../static/logo.png",
						width:30,
						height:30
						
					}
				]
			}
		},
		methods:{
			makePhone(){
				uni.makePhoneCall({
					phoneNumber: "18531053016"
				})
			}
		}
	}
</script>

<style lang="scss">
	.contact{
		>.img{
			width:750rpx;
			height: 320rpx;
		}
		> view{
			padding: 10rpx 20rpx;
			line-height: 50rpx;
			border-bottom: 1px solid #eee;
			font-size: 30rpx;
		}
		>.map{
			margin-top: 50px;
			width: 750rpx;
			height: 570rpx;
		}
	}
</style>
