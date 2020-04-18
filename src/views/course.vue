<template>
<van-pull-refresh v-model="isLoading" @refresh="onRefresh" success-text="刷新成功">
	<div class="container">
		<van-search class="course-input" v-model="search_input" placeholder="请输入搜索关键词"  @search="onSearch"/>
		
		<div class="course-section" v-show="course_list">
			
			<div class="course-title">
				<ul class="course-title-list" >
					<li class="course-title-item">{{base_info.coursesCount}}门课程</li>
					<li class="course-title-item">{{base_info.coursesLessonsCount}}课时</li>
					<li class="course-title-item">{{base_info.total_duration}}</li>
				</ul>
			</div>
			<div class="course-content">
				<CouorseList :courseData="courseData"/><!--课程组件-->
			</div>
		</div>
		<div class="course_none-section" v-show="no_course"> 
			<div class="course_none-banner">
				<img src="@/assets/img/uro-icon.png"  class="course-none_img">
				<p class="course-none_text">暂无课程~</p>
			</div>
		</div>
		<div class="prcker-section">
			<div class="prcker-text_item" @click="showPicker = true">
				<img src="@/assets/img/course-classification_icon.png" class="prcker-icon">
				<p class="prcker-text">课程分类</p>
			</div>
			<div class="prcker-select" v-show="showPicker" position="bottom">
				<van-picker class="prcker-select_main" 
					show-toolbar
					:columns="category"
					@cancel="showPicker = false"
					@confirm="onConfirm" 
				/>
			</div>
			
		</div>	<!--组件 -->
		
			
		
	</div>

</van-pull-refresh>
</template>
<script>
 	import CouorseList from '@/components/Course_list.vue'
	import courseModel from '@/models/course.js'
	export default {
		data() {
			return {
				search_input:'',
				courseData:[],
				base_info:[],
				category:[],
				page_total:'',
				count: 0,
				isLoading: false,
				current_page: 1,
				showPicker:false,
				course_list:true,
				no_course:false,
			};
		},
		created(){
			this.course();	
			this.categorys();		
		},
		methods:{
			course() {
				courseModel.list().then( res => {
					let courseData = [];
					for(let i in res.data.list){
						courseData.push(res.data.list[i]);
					}
					this.courseData = courseData;
					this.base_info = res.data.base_info;
					this.current_page = res.data.pagination.current_page;
					this.pageBottom()
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
				courseModel.list(params).then(res=>{
					if(res.data.list == ''){
						this.course();
						setTimeout(() => {
							this.$toast('返回第一页');
							this.isLoading = false;
							this.count++;
						}, 1000);
					}else{
						let courseData = [];
						for(let i in res.data.list){
							courseData.push(res.data.list[i]);
						}
						this.courseData = courseData;
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
			categorys(){
				courseModel.category().then( res => {
					console.log(res)
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
	
			onSearch(e){
				let search_text = this.search_input;
				if(search_text == ''){
					setTimeout(() => {
						this.$toast('请输入搜索内容');
						this.isLoading = false;
						this.count++;
					}, 100);
				}else{
					this.$router.push(	'course_search/' + search_text );
				}
			},
			onConfirm(e){
				console.log(e)
				this.showPicker = false;
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
			CouorseList,
		},
	}
</script>

<style type="text/css" lang="less" scoped>
	.container{
		width:100%;
		height:100%;
		padding:15px;
	}
	.course-input{
		width: 100%;
		height: 100px;
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
	}
	.course_none-section{
		// display: none;
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
	
		.prcker-text_item{
			position: fixed;
			bottom: 30px;
			right: 15px;
			width:112px;
			height: 38px;
			// z-index: 999;
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
			position:fixed;
			left:0;
			bottom: 0;
			width:100%;
			// height:30%;
			background-color: #fff;;
			.prcker-select_main{
				width: 100%;
				// height:100px;
				// position: absolute;
				
				// z-index: 20;
			}
		}
		

	}
</style>