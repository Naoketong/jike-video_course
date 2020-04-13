<template>
<van-pull-refresh v-model="isLoading" @refresh="onRefresh" success-text="刷新成功">
	<div class="container">
		<van-search class="course-input" v-model="value" placeholder="请输入您要搜索的关键词" />
		<div class="course-section">
			
			<div class="course-title">
				<ul class="course-title-list" >
					<li class="course-title-item">{{base_info.coursesCount}}门课程</li>
					<li class="course-title-item">{{base_info.coursesLessonsCount}}课时</li>
					<li class="course-title-item">{{base_info.total_duration}}</li>
				</ul>
			</div>
			<!--<div style="height:1500px;background:blue"></div>-->
			<div class="course-content">
				<ul class="course-list" >
					<li class="course-item" v-for="item in courseData.list">
						<div class="course-main_img">
							<img :src="item.cover_url" class="main-img_banner">
							<img v-if="item.status_label" src="@/assets/img/The-latest.png" class="main-img_thelates">
							<img v-if="item.difficulty_level_label == '入门'" src="@/assets/img/level-1.png" class="main-img_level">
							<img v-if="item.difficulty_level_label == '进阶'" src="@/assets/img/level-2.png" class="main-img_level">
							<img v-if="item.difficulty_level_label == '高阶'" src="@/assets/img/level-3.png" class="main-img_level">
						</div>
						<div class="course-text">
							<div class="course-main_title">
								<!--Vue Element+Node.js开通用后台管理系统-->
								{{item.name}}
							</div>
							<div class="course-main_text">互联网架构师必备技能</div>
							<div class="course-main_time">
								<div class="time-when">{{item.total_duration}}</div>
								<div class="course-main_class">{{item.sort}}课时</div>
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
				<van-picker class="prcker-select_main" show-toolbar  :columns="category" />
			</div>
			
		</div>	<!--组件 -->
		
			
		
	</div>

</van-pull-refresh>
</template>
<script>
	import courseModel from '@/models/course.js'
	export default {
		data() {
			return {
				value:'',
				courseData:[],
				base_info:[],
				category:[],
				count: 0,
				isLoading: false,
				current_page: 1,
			};
		},
		created(){
			this.course();			
		},
		methods:{
			course() {
				courseModel.list().then( res => {
					this.courseData = res.data;
					this.base_info = res.data.base_info;
					this.current_page = res.data.pagination.current_page;
					this.pageBottom()
				});
			},
			categorys(){
				courseModel.category().then( res => {
					let arr = res.data.categories;
					this.category = arr.map(data=>{
						let content = data.contents;
						content.map(item=>{
							let text = 'text';
							// let children = 'children';
							item[text] = item['name'];
							// item[children] = item['contents']
							delete item['name'];
							// delete item['contents'];
						})
						return{
							text:data['name'],
							children:data['contents']
						}				
					})
				});
			},
			pageBottom() {
				let that = this;
				let current_page = this.current_page;
				window.onscroll = function() {
					let pageHeight = document.body.clientHeight;
					let scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
					let windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
					let	thresold = pageHeight - scrollTop - windowHeight;
					if (thresold > -100 && thresold <= 20) {
						that.Page_Refresh();												
					}
				};
			},
			Page_Refresh(){
				let current_page = this.current_page;
				let page = current_page + 1;
				let page_size = 12;
				let params = {page,page_size}
				courseModel.categoryAdd(params).then(res=>{
					if(res.data.list == ''){
						this.course();
						setTimeout(() => {
							this.$toast('返回第一页');
							this.isLoading = false;
							this.count++;
						}, 1000);
					}else{
						this.courseData = res.data;
						this.base_info = res.data.base_info;
						this.current_page += 1;
					}
				})
				window.scrollTo(0,0);
				setTimeout(() => {
					this.$toast('已更新课单');
					this.isLoading = false;
					this.count++;
				}, 100);


			},
			
			onRefresh() {
				setTimeout(() => {
					this.$toast('刷新成功');
					this.isLoading = false;
					this.count++;
				}, 1000);
			},
		},
		components: {
		},
	}
</script>

<style type="text/css" lang="less" >
	.container{
		width:100%;
		height:100%;
		padding:15px;
	}
	.course-input{
		margin-bottom: 10px;
	}
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
				display: inline-block;
				margin-right:10px;
				width: 167px;
				box-shadow:1px 1px 1px #f2f2f2;
				margin-bottom: 10px;
				vertical-align:top;
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
			.course-item:nth-child(2n){
				margin-right: 0;
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
		width:100%;
		height:100%;	
		.prcker-text_item{
			position: fixed;
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
			display:none;
			background-color: rgba(0, 0, 0, .5);
			.prcker-select_main{
				width: 100%;
				position: absolute;
				bottom: 0;
				z-index: 20;
			}
		}
		

	}
</style>