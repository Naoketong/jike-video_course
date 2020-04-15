<template>
	<div class="container">
		<van-search class="course-input" v-model="search_input" placeholder="请输入搜索关键词"  @search="onSearch"/>
		
		<div class="course-content">
			<CouorseList/><!--课程组件-->
		</div>
		<div class="course_none-section" v-show="no_course"> 
			<div class="course_none-banner">
				<img src="@/assets/img/uro-icon.png"  class="course-none_img">
				<p class="course-none_text">暂无课程~</p>
			</div>
		</div>
		<div class="prcker-section" v-show='prcker_all'>
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
				category:[],
				page_total:'',
				count: 0,
				isLoading: false,
				current_page: 1,
				showPicker:false,
				course_list:true,
				no_course:false,
				prcker_all:true,
			};
		},
		created(){
      this.search();
			this.course();
			this.categorys();		
		},
		methods:{
			course() {
				courseModel.list().then( res => {
					this.page_total = res.data.pagination.total;
				});
			},
      search(){
				let url = this.$route.path;
				let index =  url.lastIndexOf("\/"); 
				let search_text = url.substring(index + 1,url.length);
				let page = 1;
				let page_size = this.page_total;
				let params = { search_text, page, page_size	}
				courseModel.CourseSearch(params).then( res => {
					if(res.data.list == ''){
						this.no_course = true;
					}else if(res.data.list !== ''){
						console.log(res.data.list)
						this.prcker_all = false;
					}
				});
      },
      categorys(){
				courseModel.category().then( res => {
					let arr = res.data.categories;
					this.category = arr.map(data=>{
						let content = data.contents;
						content.map(item=>{
							let text = 'text';
							item[text] = item['name'];
							delete item['name'];
						})
						return{
							text:data['name'],
							children:data['contents']
						}				
					})
				});
			},
			
	
			onSearch(e){
				// let search_text = this.search_input;
				// let page = 1;
				// let page_size = this.page_total;
				// let params = { search_text, page, page_size	}
				// courseModel.CourseSearch(params).then( res => {
				// 	console.log(res)
				// });
			},
      onConfirm(){

      },
			
		},
		components: {
			CouorseList,
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
		width: 100%;
		height: 100px;
		position: relative;
		z-index: 12;
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
			// display:none;
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