<template>
  <div class="container">
		<!-- <img src="@/assets/img/位图.png" alt=""> -->
		<div class="course_video-section">
			<video class="course_video" src="" controls=""></video>
		</div>
		<div class="course-content">
			<div class="course-title">
				<p class="course-text">Vue Element+Node.js开通用后台管理系统</p>
				<div class="course-main_time">
					<div class="time-when">2.5小时</div>
					<div class="course-main_class">8课时</div>
				</div>
			</div>
			<div class="course-main">
				<ul class="course-list">
					<li class="course-item-title">第一节 促使java</li>
					<li class="course-item">
						<div class="course-item-left">
							<span class="course-grade">1</span>
							<p class="course-chapter">我是搜书的电动机的说法京东方拉克丝京东方 代收款就</p>
						</div>
						<div class="course-chadivter-time">5分钟</div>
					</li>
				</ul>
				<ul class="course-list">
					<li class="course-item-title">第一节 促使java</li>
					<li class="course-item">
						<div class="course-item-left">
							<span class="course-grade">1</span>
							<p class="course-chapter">我是搜书的电动机的说法京东方拉克丝京东方 代收款就</p>
						</div>
						<div class="course-chadivter-time">5分钟</div>
					</li>
					<li class="course-item">
						<div class="course-item-left">
							<span class="course-grade">1</span>
							<p class="course-chapter">我是搜书的电动机的说法京东方拉克丝京东方 代收款就</p>
						</div>
						<div class="course-chadivter-time">5分钟</div>
					</li>
					<li class="course-item">
						<div class="course-item-left">
							<span class="course-grade">1</span>
							<p class="course-chapter">拉克丝京东方 代收款就</p>
						</div>
						<div class="course-chadivter-time">5分钟</div>
					</li>
					<li class="course-item">
						<div class="course-item-left">
							<span class="course-grade">1</span>
							<p class="course-chapter"> 代收款就</p>
						</div>
						<div class="course-chadivter-time">5分钟</div>
					</li>
					<li class="course-item">
						<div class="course-item-left">
							<span class="course-grade">1</span>
							<p class="course-chapter">我是搜书的电动机的说法京东方拉克丝京东方 代收款就</p>
						</div>
						<div class="course-chadivter-time">5分钟</div>
					</li>
					<li class="course-item">
						<div class="course-item-left">
							<span class="course-grade">1</span>
							<p class="course-chapter">我是搜书的电动机的说法京东方拉克丝京东方 代收款就</p>
						</div>
						<div class="course-chadivter-time">5分钟</div>
					</li>
					<li class="course-item">
						<div class="course-item-left">
							<span class="course-grade">1</span>
							<p class="course-chapter">我是搜书的电动机的说法京东方拉克丝京东方 代收款就</p>
						</div>
						<div class="course-chadivter-time">5分钟</div>
					</li>
				</ul>
			</div>

		</div>
		
	</div>
</template>
<script>

	export default {
    name:'course_details',
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
	.container{
		padding:0;
	}
	.course_video-section{
		width: 100%;
		margin-bottom: 10px;
		.course_video{
			width: 100%;
			height: 210px;
		}
	}
	.course-content{
		padding:15px;
		.course-title{
			font-size: 16px;
			color:#333;
			font-weight:600;
			border-bottom:1px solid #eaeaea;
			padding-bottom:10px;
			.course-main_time{
				margin-bottom: 5px;
				.time-when{
					position: relative;
					display: inline-block;
					font-size: 6px;
					color: #a4a4a4;
					margin-top:4px;
					margin-right:18px;
					padding-left:16px;
				}
				.time-when:before{
					position: absolute;
					top:2px;
					left: 0px;
					content: '';
					display: inline-block;
					width: 16px;
					height: 16px;
					background-image: url('./../assets/img/time-icon.png');
					background-repeat: no-repeat;
					background-size: 12px 12px;
				}
				.time-when:after{
					position: absolute;
					top:2px;
					right: -9px;
					content: '';
					display: inline-block;
					width: 1px;
					height: 12px;
					background-color: #a4a4a4;
				}
				.course-main_class{
					display: inline-block;
					font-size: 6px;
					color:#a4a4a4;
				}
			}




		}	
		.course-list{
			margin: 18px 0 20px 0;
			.course-item-title{
				font-size: 14px;
				line-height:14px;
				color:#333;
				font-weight:600;
				padding-left:14px;
				margin-bottom:12px
			}
			.course-item{
				display: flex;
				justify-content: space-between;
				
				width: 100%;
				height: 50px;
				/* background-color: #f5f5f5; 点击*/
				border-radius:5px;
				padding:15px;
				.course-item-left{
					display: flex;
					align-items: center;
				}
				.course-grade{
					display: inline-block;
					width: 20px;
					height: 20px;
					font-size: 10px;
					line-height:20px;
					border:1px solid #e0e0e0;
					text-align:center;
					border-radius:50%;
					background:#fff;
				}
				.course-chapter{
					display: inline-block;
					font-size: 14px;
					line-height: 50px;
					color:#333;
					width: 220px;
					margin-left: 11px;
					overflow: hidden;
					text-overflow:ellipsis;
					white-space: nowrap;
				}
				.course-chadivter-time{
					font-size: 12px;
					color:#adadad;
					/* color:#333;点击 */
				}
			}
		}

	}
</style>