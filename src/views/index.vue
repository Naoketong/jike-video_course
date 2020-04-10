<template>
  <div class="container">
		<van-row class="vant-header">
			<van-col>
				<van-icon name="arrow-left" class="m-header-icon" />
				<div class="head-title">人才云</div>
			</van-col>
		</van-row><!--组件-->			
		<div class="banner-section">
			<img class="banner-img" src="@/assets/img/banner.png">
			<img class="banner-img" src="@/assets/img/banner-copy.png">
		</div>
		<div class="page-operation">
			<div class="operation-list">
				<div class="operation-item">
					<img src="@/assets/img/Triangle.png" class="operation-icon">
					<p class="operation-text">视频课</p>
				</div>
				<div class="operation-item">
					<img src="@/assets/img/Group-4.png" class="operation-icon">
					<p class="operation-text">联系我们</p>
				</div>
			</div>
			
		</div>
	</div>
</template>
<script>
	
	export default {
		data() {
			return{
			}
		},
		created(){
		},
		methods:{
		},
		components: {
		},
	}
</script>
<style type="text/css" lang="less">
	.vant-header {
		position: relative;
		height: 40px;
		line-height: 40px;
		background: #fff;
		color: #0F0F0F;
		font-size:16px;
		font-weight: 500;
		text-align:center;
	}
	.m-header-icon {
		position: absolute;
		top: 50%;
		left: 22px;
		transform: translateY(-50%);
		font-size: 20px;
	}
	.head-title{
		position: absolute;
		top:50%;
		left: 50%;
		transform: translate(-50%,-50%);
	}
    
    
		



	.banner-section{
		width: 100%;	
	}
	.banner-img{
		width: 100%;
	}
	.banner-img:nth-child(1){
		margin-bottom: 10px;
	}
	.page-operation{
		display: flex;
		align-items: center;
		justify-content: center;
		width:100%;
		height: 66px;
		
	}
	.operation-list{
		position: relative;
		display: flex;
		justify-content:space-between;
		height: 20px;
		width: 100%;
		
	}
	.operation-list:after{
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		display: inline-block;
		content:'';
		background-color: #f2f2f2;
		width: 3px;
		height: 100%;
	}
	.operation-item{
		display: inline-block;
		width: 50%;
		text-align: center;
	}
	.operation-icon{
		display: inline-block;
		vertical-align: middle;
		margin-right: 6px;
		width: 20px;
		height: 20px;
	}
	.operation-text{
		display: inline-block;
		vertical-align: middle;
		font-size: 14px;
		line-height: 20px;
		color: #3f3c3c;
	}

</style>