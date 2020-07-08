<template>
	<view class="news-detail">
		<text class="title">标题: {{detail.title}}</text>
		<view class="info">
			<text>发表时间：{{detail.add_time | tiemFilter}}</text>
			<text>浏览：{{detail.click}}</text>
		</view>
		<view class="content">
			<rich-text :nodes="detail.content"></rich-text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				detail: {}
			}
		},
		methods: {
			getNewItem(id){
				this.$myRequist({
					url: "/api/getnew/"+id
				}).then(res => {
					this.detail = res.data.message[0]
				})
			}
		},
		onLoad(val) {
			this.getNewItem(val.id)
		}
	}
</script>

<style lang="scss">
	.news-detail{
		.title{
			display: block;
			margin-bottom: 20rpx;
		}
		.info{
			text:nth-child(2){
				margin-left: 60rpx;
			}
		}
	}
</style>
