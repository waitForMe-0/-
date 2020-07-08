<template>
	<view class="goosDetail">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
			<swiper-item v-for="(elem, i) of swipers" :key="i">
				<image :src="elem.src"></image>
			</swiper-item>
		</swiper>
		<view class="box1">
			<view class="price">
				<text>￥{{goodsInfo.sell_price}}</text>
				<text>￥{{goodsInfo.market_price}}</text>
			</view>
			<view class="goodsName">
				{{goodsInfo.title}}
			</view>
		</view>
		<view class="box2">
			<view>货号：{{goodsInfo.goods_no}}</view>
			<view>库存：{{goodsInfo.stock_quantity}}</view>
		</view>
		<view class="box3">
			<view>详情介绍</view>
			<view class="content">
				<rich-text :nodes="GoodDesc.content"></rich-text>
			</view>
		</view>
		<view class="goods-nav">
			<uni-goods-nav :fill="true"  :options="options" :buttonGroup="buttonGroup"  @click="onClick" @buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script>
	import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue'
	const	options = [{
	            icon: 'headphones',
	            text: '客服'
	        }, {
	            icon: 'shop',
	            text: '店铺',
	            info: 2,
	            infoBackgroundColor:'#007aff',
	            infoColor:"red"
	        }, {
	            icon: 'cart',
	            text: '购物车',
	            info: 2
	        }]
	const  buttonGroup = [{
			  text: '加入购物车',
			  backgroundColor: '#ff0000',
			  color: '#fff'
			},
			{
			  text: '立即购买',
			  backgroundColor: '#ffa200',
			  color: '#fff'
			}
        ]
	export default {
		data() {
			return {
				swipers:[],
				goodsInfo:{},
				GoodDesc: {},
				options,
				buttonGroup
			};
		},
		methods:{
			getSwipers(id){
				this.$myRequist({
					url: "/api/getthumimages/"+id
				}).then(res=>{
					this.swipers = res.data.message
				})
			},
			getGoodInfo(id){
				this.$myRequist({
					url: "/api/goods/getinfo/"+id
				}).then(res=>{
					this.goodsInfo = res.data.message[0]
				})
			},
			getGoodDesc(id){
				this.$myRequist({
					url: "/api/goods/getdesc/"+id
				}).then(res=>{
					this.GoodDesc = res.data.message[0]
				})
			},
			onClick (e) {
				uni.showToast({
				  title: `点击${e.content.text}`,
				  icon: 'none'
				})
			},
		  buttonClick (e) {
			console.log(e)
			this.options[2].info++
		  }
		},
		onLoad(id) {
			this.getSwipers(id.id);
			this.getGoodInfo(id.id);
			this.getGoodDesc(id.id)
		},
		components:{
			uniGoodsNav
		}
	}
</script>

<style lang="scss">
	.goosDetail{
		swiper{
			height: 700rpx;
			image{
				height: 100%;
				width: 100%;
			}
		}
		.box1{
			padding:0 30rpx 0 30rpx;
			border-bottom: 10rpx solid #eee;
			.price{
				font-size: 50rpx;
				line-height: 80rpx;
				text{
					color: $shop-color;
					&:nth-child(2){
						margin-left:40rpx;
						font-size: 40rpx;
						color: #ccc;
						text-decoration: line-through;
					}
				}
			}
			.goodsName{
				font-size: 32rpx;
				line-height: 60rpx;
			}
		}
		.box2{
			border-bottom: 10rpx solid #eee;
			view{
				line-height: 70rpx;
				padding:0 30rpx 0 30rpx;
				font-size: 33rpx;
			}
		}
		.box3{
			padding:0 30rpx 0 30rpx;
			view:nth-child(1){
				border-bottom: 4rpx solid #eee;
				line-height: 80rpx;
			}
			.content{
				font-size: 34rpx;
				line-height: 60rpx;
				
			}
		}
		.goods-nav{
			width: 750rpx;
			position: fixed;
			bottom: 0px;
		}
	}
	
</style>
