<template>
	<view>
		<swiper class="swiper" :circular="true" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(elem, i) of swipers" :key="i">
				<image class="swiper-image" :src="elem.img" mode=""></image>
			</swiper-item>
		</swiper>
		<!-- 导航区域 -->
		<view class="nav">
			<view class="nav-item" v-for="(elem, i) of navs" :key="i" @click="navItemClick(elem.path)">
				<view :class="elem.icon"></view>
				<text>{{elem.title}}</text>
			</view>
		</view>
		<!-- 推荐商品 -->
		<view class="hot-goods">
			<view class="tit">
				推荐商品
			</view>
			<goods-list :goods="goods" @goDetail="goGoosDetail"></goods-list>
		</view>
	</view>
</template>

<script>
	import goodsList from "../components/goods-list/goods-list.vue"
	export default {
		components:{
			"goods-list": goodsList
		},
		data() {
			return { 
				swipers: [],
				goods: [],
				navs: [
					{
						icon: "iconfont icon-ziyuan",
						title: "黑马超市",
						path: "/pages/goods/goods"
					},
					{
						icon: "iconfont icon-guanyuwomen",
						title: "联系我们",
						path: "/pages/contact/contact"
					},
					{
						icon: "iconfont icon-tupian",
						title: "社区图片",
						path: "/pages/pic/pic"
					},
					{
						icon: "iconfont icon-shipin",
						title: "学习视频",
						path: "/pages/videos/videos"
					}
				]
			}
		},
		onLoad() {
			this.getSwipers();
			this.getHotGoods();
		},
		methods: {
			//  请求轮播图
			getSwipers(){
				this.$myRequist({
					url: "/api/getlunbo",
				}).then(res => {
					this.swipers = res.data.message
				})
			},
			
			// 请求商品列表
			getHotGoods(){
				this.$myRequist({
					url:"/api/getgoods?pageindex=1"
				}).then(res => {
					this.goods =res.data.message
				})
			},
			//导航点击处理函数
			navItemClick(url){
				uni.navigateTo({
					url,
				})
			},
			//跳转商品详情页
			goGoosDetail(id){
				uni.navigateTo({
					url: "/pages/goGoosDetail/goGoosDetail?id="+id
				})
			}
		},
	}
</script>

<style scoped lang="scss">
	.swiper{
		width: 100%;
	}
	.swiper-image{
		width: 100%;
		height: 100%;
	}
	@font-face {font-family: "iconfont";
	  src: url('~@/static/font_nav/iconfont.eot?t=1576844226174'); /* IE9 */
	  src: url('~@/static/font_nav/iconfont.eot?t=1576844226174#iefix') format('embedded-opentype'), /* IE6-IE8 */
	  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAVMAAsAAAAAChwAAAT9AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDKAqHQIYhATYCJAMUCwwABCAFhG0HUBurCFGUTk6f7Edh3LaEI5xY7HYeoWNK7zwLfd/7ZDz8/37f9rny/h3XpE711SdNQq1REh4bhEQoLLJn8v/facvNLUze6duSsZbv+GnTlb7095Zi+lMOtlEU4UA4hIXh39Neujkz1HYC0ju3M1Ac9Uf+ce/0z/PA5qOyXP5orGFznpcFmGBAY2xsawEOyhL0FvEsLiQTuJ7AoFUtsVtbBxckq4BugXjNDYVkbRYlhBOavvMZW7ZjpmrpbfpEfFY/H/8MIktSM+h78XRTJys/2///CaSPuC0jpPm5cJtExh6iEM99PQ8l9NiehMFPZtIVRMNXEj+zb0beXPT/M1lbNI395ZEVieiAZpiR1+KFn1lRTOZnifXTnlARyZg1+Tgxt7EMYgmJIyQ+AMNyCeqKWeO9ZOlV6Y7jtTFeKQ8tRm5qIlYcXy1Oyh9fVuuJ2tZ0WWdWhKmbl3MZu/sBgAGj+GXDAAynUbHQsuY1Dsowei8GE4agxGp8LQRRQbg6AndIDcIVej0Mm8c2vQ46ZEObfY4iStdK1oEgH8wh0cirf1tGHWjmFZSXw4Zt2pNGH1AssUPk+XIpFCyZjCESvUgkNAQRBpB+/CBuCIaSjsmCTRSFWSIXVzWoOeKt6wNErxaK51q3r1fPWtfq7nL7SgSFApHfYIivvEiv0cyEvqZGntCM6OxoqkToIdUN3Gg6mJUAqBFGFjxEg0tgwvcDFDIAM9f+WFS4weC6ob6egYZ6rhYSgSJa29jWNzPQ0s81TiSSNXpHI5jwtbi6eBNqkGrdc99fbMfQL+iYTR2oapkiByLYs93k3fbd5NwOxF9mAwy7HK58wdfBl+66BEADufaQOdvl2CPZJU7RbEv0wAzQL7Oh+dqs2fBRb9OgvjwoANaSyP+OIkUtxdT2/+sOGgpaCg6mGwDnsoN8fi5XyfIDVG5suj4+Wyg4oRIcmX6AAKfWSfHOS/m4NOO8XH5k+R2VQ1y+jbobtzlAYyAzQskq82saBgPMgBl9GDMAjnmOlY4Uj5SOuQGIffIeFR6dJps6HYW4RPbdpn6ypgHJMwmlMmTWBPBKrUlpRVBZrqfp21Wmy+v6P7OwsZ4Iob4vJnZfUlJTK/V9U/VkftSxuvWZbpn658+yjBSnJdacFWDXa2k6qDLvZgWQk8gTocUryiH3Y+6vPMc8KiXuu13obDbdSKNYV79vro61UN9/WHR+JpWlwfQNDrDNB6SVgC5daU02/IT7CSz3kQX4CPo9+Sub/UPsukQZ4Uhctmlu59ts8OXe2ML/Bhfwvfljk8rjW9m+pB/phmgqUQjyp/jKwVrLWy3UnASibDH6qsslHUkYxCB9AIFJP/kYZpZvIjQzJiQ9K5A1a2gh96Aacgad5ioM2rU9ecgUKSHKAHY8EAjjHiEZ9RWycRFayG+oZv1CZzwSMOgyGnMO2QieX5egIOhUnVCuCY8JdsxrxWdghI4irXKVewUy4EHa7/ScyW3wQOYxIBgaA0RGmRQu3SKbgeMI6kthgYYdE9Gf63aZ35k6mnBJ3k0SUCCgo1QTFKcRPEyujvKu958BhpBDIUNKfiSvACnAa6f6Onox0G2NF6tkXRoHhgwDCDHeiZEEF7VFXcDBmED5/q0sQIM6zBQR35wuq8Tiajrl69xpLD0VysKcNVLkKFGj070xuc+9NIZyWPEKRig1moQj4YKXnvKJzUwIAAAA') format('woff2'),
	  url('~@/static/font_nav/iconfont.woff?t=1576844226174') format('woff'),
	  url('~@/static/font_nav/iconfont.ttf?t=1576844226174') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
	  url('~@/static/font_nav/iconfont.svg?t=1576844226174#iconfont') format('svg'); /* iOS 4.1- */
	}
	
	.iconfont {
	  font-family: "iconfont" !important;
	  font-size: 16px;
	  font-style: normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}
	
	.icon-shipin:before {
	  content: "\f0024";
	}
	
	.icon-tupian:before {
	  content: "\e650";
	}
	
	.icon-guanyuwomen:before {
	  content: "\e608";
	}
	
	.icon-ziyuan:before {
	  content: "\e60d";
	}
	.nav{
		display: flex;
		>.nav-item{
			width: 25%;
			> view{
				background-color: $shop-color;
				text-align: center;
				width: 120rpx;
				height: 120rpx;
				border-radius: 50%;
				line-height: 120rpx;
				margin: 0 auto;
				margin-top: 10px;
				color: #fff;
				font-size: 48rpx;
				
			}
			> text {
				font-size: 30rpx;
				display: block;
				margin: 0 auto;
				margin-top: 10px;
				text-align: center;
			}
		}
	}
	.icon-tupian{
		font-size: 45rpx;
	}
	.hot-goods{
		background-color: #eee;
		overflow: hidden;
		margin-top: 20px;
		.tit{
			height: 50px;
			line-height: 50px;
			color: $shop-color;
			text-align: center;
			letter-spacing: 20px;
			background-color: #fff;
			margin: 7rpx 0px;
		}
	}
</style>
