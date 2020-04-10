<template>
	<div class="container">
		
		<!-- <div class="operation-section">
			<p class="operation-title">中国银联</p>
			<div class="operation-binding-list">
				<div class="operation-binding switch">切换</div>
				<div class="operation-binding bind">新增绑定</div>
			</div>
		</div>	 -->
		<van-search class="course-input" v-model="value" placeholder="请输入您要搜索的关键词" />
		<div class="course-section">
			
			<div class="course-title">
				<ul class="course-title-list">
					<li class="course-title-item">79门课程</li>
					<li class="course-title-item">201课时</li>
					<li class="course-title-item">392.5小时</li>
				</ul>
			</div>
			<div class="course-content">
				<ul class="course-list">
					<li class="course-item">
						<div class="course-main">
							<div class="course-main_img">
								<img src="@/assets/img/Bitmap.png" class="main-img_banner">
								<img src="@/assets/img/The-latest.png" class="main-img_thelates">
								<img src="@/assets/img/level-1.png" class="main-img_level">
							</div>
							<div class="course-text">
								<div class="course-main_title">
									Vue Element+Node.js开通用后台管理系统
								</div>
								<div class="course-main_text">互联网架构师必备技能</div>
								<div class="course-main_time">
									<div class="time-when">2.5小时</div>
									<div class="course-main_class">8课时</div>
								</div>
							</div>
						</div>
						<div class="course-main">
							<div class="course-main_img">
								<img src="@/assets/img/Bitmap.png" class="main-img_banner">
								<img src="@/assets/img/The-latest.png" class="main-img_thelates">
								<img src="@/assets/img/level-1.png" class="main-img_level">
							</div>
							<div class="course-text">
								<div class="course-main_title">
									Vue Element+Node.js开通用后台管理系统
								</div>
								<div class="course-main_text">互联网架构师必备技能</div>
								<div class="course-main_time">
									<div class="time-when">2.5小时</div>
									<div class="course-main_class">8课时</div>
								</div>
							</div>
						</div>
					</li>
					<li class="course-item">
						<div class="course-main">
							<div class="course-main_img">
								<img src="@/assets/img/Bitmap.png" class="main-img_banner">
								<img src="@/assets/img/The-latest.png" class="main-img_thelates">
								<img src="@/assets/img/level-1.png" class="main-img_level">
							</div>
							<div class="course-text">
								<div class="course-main_title">
									Vue Element+Node.js开通用后台管理系统
								</div>
								<div class="course-main_text">互联网架构师必备技能</div>
								<div class="course-main_time">
									<div class="time-when">2.5小时</div>
									<div class="course-main_class">8课时</div>
								</div>
							</div>
						</div>
						<div class="course-main">
							<div class="course-main_img">
								<img src="@/assets/img/Bitmap.png" class="main-img_banner">
								<img src="@/assets/img/The-latest.png" class="main-img_thelates">
								<img src="@/assets/img/level-1.png" class="main-img_level">
							</div>
							<div class="course-text">
								<div class="course-main_title">
									Vue Element+Node.js开通用后台管理系统
								</div>
								<div class="course-main_text">互联网架构师必备技能</div>
								<div class="course-main_time">
									<div class="time-when">2.5小时</div>
									<div class="course-main_class">8课时</div>
								</div>
							</div>
						</div>
					</li>
					<li class="course-item">
						<div class="course-main">
							<div class="course-main_img">
								<img src="@/assets/img/Bitmap.png" class="main-img_banner">
								<img src="@/assets/img/The-latest.png" class="main-img_thelates">
								<img src="@/assets/img/level-1.png" class="main-img_level">
							</div>
							<div class="course-text">
								<div class="course-main_title">
									Vue Element+Node.js开通用后台管理系统
								</div>
								<div class="course-main_text">互联网架构师必备技能</div>
								<div class="course-main_time">
									<div class="time-when">2.5小时</div>
									<div class="course-main_class">8课时</div>
								</div>
							</div>
						</div>
						<div class="course-main">
							<div class="course-main_img">
								<img src="@/assets/img/Bitmap.png" class="main-img_banner">
								<img src="@/assets/img/The-latest.png" class="main-img_thelates">
								<img src="@/assets/img/level-1.png" class="main-img_level">
							</div>
							<div class="course-text">
								<div class="course-main_title">
									Vue Element+Node.js开通用后台管理系统
								</div>
								<div class="course-main_text">互联网架构师必备技能</div>
								<div class="course-main_time">
									<div class="time-when">2.5小时</div>
									<div class="course-main_class">8课时</div>
								</div>
							</div>
						</div>
					</li>
				
				</ul>
			</div>
		</div>
		<div class="course_none-section">
			<div class="course_none-banner">
				<img src="@/assets/img/uro-icon.png"  class="course-none_img">
				<p class="course-none_text">暂无课程~</p>
			</div>
		</div>
		<div class="prcker-section">
			<div class="prcker-text_item">
				<img src="@/assets/img/course-classification_icon.png" class="prcker-icon">
				<p class="prcker-text">课程分类</p>
			</div>
			<div class="prcker-select">
				<van-picker class="prcker-select_main" show-toolbar  :columns="columns" />
			</div>
			
		</div>	<!--组件 -->
			
		
	</div>
</template>
<script>
	export default {
		data() {
    return {
			value:'',
      columns: [{
        text: '浙江',
        children: [{
          text: '杭州',
          children: [{ text: '西湖区' }, { text: '余杭区' }]
        }, {
          text: '温州',
          children: [{ text: '鹿城区' }, { text: '瓯海区' }]
        }]
      }, {
        text: '福建',
        children: [{
          text: '福州',
          children: [{ text: '鼓楼区' }, { text: '台江区' }]
        }, {
          text: '厦门',
          children: [{ text: '思明区' }, { text: '海沧区' }]
        }]
      }]
    };
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
		padding:15px;
	}
	.course-input{
		margin-bottom: 10px;
	}
	/* .operation-section{
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		width: 100%;
		height: 36px;
		margin-bottom: 4px;
		.operation-title{
			font-size:14px;
			color:#333;
			line-height: 36px;
			font-weight:600;
		}
		.operation-binding-list{
			display: flex;
			justify-content: flex-end;
		}
		.operation-binding{
			font-size: 10px;
			line-height: 36px;
			color: #999;
		}
		.operation-binding:before{
			display: inline-block;
			content: '';
			width: 14px;
			height: 14px;
			background-repeat: no-repeat;
			vertical-align: middle;
			margin-right: 3px;
		}
		.operation-binding.switch{
			margin-right: 11px;
		}
		.operation-binding.switch:before{
			background-image: url('./../assets/img/switch.png');
		}
		.operation-binding.bind:before{
			background-image: url('./../assets/img/Group-5.png');
		}
	} */
	.course-section{
		width: 100%;
		/* display: none; */
		.course-title{
			font-size: 0;
			display: flex;
			justify-content: center;
			.course-title-list{
				.course-title-item{
					position: relative;
					display: inline-block;
					font-size: 12px;
					color:#999;
					margin-right:17px;
				}
				.course-title-item:after{
					position: absolute;
					top: 50%;
					transform: translateY(-50%);
					right: -8.5px;
					display: inline-block;
					content: '';
					width: 1px;
					height: 12px;
					background-color: #999;
				}
				.course-title-item:last-child:after{
					display: none;
				}
			}
		}
		.course-list{
			font-size: 0;
			margin-top: 15px;
			.course-item{
				display: flex;
				justify-content:space-between;
				align-items: flex-start;
				.course-main{
					width: 167px;
					box-shadow:1px 1px 1px #f2f2f2;
					margin-bottom: 10px;
					.course-main_img{
						position: relative;
						margin-bottom: 8px;
						.main-img_banner{
							width: 100%;
							height: 96px;
						}
						.main-img_thelates{
							position: absolute;
							top: 0;
							left: 0;
						}
						.main-img_level{
							position: absolute;
							top: 0;
							right:8px;
						}
					}
					.course-text{
						padding:8px;
						.course-main_title{
							font-size: 10px;
							color:#333;
							font-weight:600;
						}
						.course-main_text{
							font-size: 6px;
							line-height: 6px;
							font-weight: 400;
							color: #999;
							margin: 8px 0;
						}
						.course-main_time{
							margin-bottom: 5px;
							.time-when{
								position: relative;
								display: inline-block;
								font-size: 6px;
								color: #999;
								/* vertical-align: middle; */
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
								background-color: #999;
							}
							.course-main_class{
								display: inline-block;
								font-size: 6px;
								color:#999;
								/* vertical-align: middle; */
							}
						}
					}
					
				}
			}
		}
	
	}
	.course_none-section{
		display: none;
		position: relative;
		width: 100%;
		height: 666px;
		.course_none-banner{
			position: absolute;
			top:150px;
			left: 50%;
			transform: translateX(-50%);
		}
		.course-none_text{
			font-size: 14px;
			color: #999;
			text-align: center;
			margin-top: 16px;
		}
	}


	.prcker-section{
		position: fixed;
		bottom: 0;
		right: 0;
		.prcker-text_item{
			position: absolute;
			bottom: 30px;
			right: 15px;
			width:112px;
			height: 38px;
			z-index: 10;
			background-color:rgba(0,0,0,.8);
			border-radius:30px;
			.prcker-icon{
				position: absolute;
				top:50%;
				transform: translateY(-50%);
				left: 20px;
			}
			.prcker-text{
				position: absolute;
				top:50%;
				right: 20px;
				transform: translateY(-50%);
				font-size: 12px;
				color: #fff;
			}
		}
	
		.prcker-select{
			display: none;
			width: 375px;
			height: 666px;
			background-color: rgba(0, 0, 0, .5);
			z-index: 999;
			.prcker-select_main{
				width: 100%;
				position: absolute;
				bottom: 0;
			}
		}
		

	}
</style>