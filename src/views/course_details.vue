<template>
  <div class="container">
		<div class="course_video-section">
			<video class="course_video" :src="videoUrl" controls=""></video>
		</div>
		<div class="course-content">
			<div class="course-title">
				<p class="course-text">{{courseData.name}}</p>
				<div class="course-main_time">
					<div class="time-when">{{courseData.total_duration}}</div>
					<div class="course-main_class">{{courseData.contents_count}}课时</div>
				</div>
			</div>
			<div class="course-main">
				<ul class="course-list" v-for="(item,index) in ocurse_content_Data" :key="index">
					<li class="course-item-title">第{{index + 1}}节 {{item.name}}</li>
					<li 	:class="index == 0 ? 'course-item active' :'course-item'"	>	<!-- -->
						<div
							class="course-items"
							v-for="(elem,index) in item.children" 
							:data-url="elem.url"  
							@click="videoSelect"
							@mouseover="mouseOver($event)" 
							@mouseleave="mouseLeave($event)"
						>
							<div class="course-item-left">
								<span class="course-grade">{{index + 1}}</span>
								<p class="course-chapter">{{elem.name}}</p>
							</div>
							<div class="course-chadivter-time">{{elem.duration}}</div>
						</div>
					</li>
				</ul>
				
			</div>

		</div>
		
	</div>
</template>
<script>
	import courseModel from '@/models/course.js'
	export default {
    name:'course_details',
		data() {
			return{
				courseData:[],
				ocurse_content_Data:[],
				videoUrl:'',	  	
			}
		},
		created(){
			this.course();
		},
		methods:{	
			course(){
				let url = this.$route.path;
				let index =  url.lastIndexOf("\/"); 
				let id = url.substring(index + 1,url.length);
				courseModel.courseItem(id).then(res=>{
					this.courseData = res.data.course;
					this.ocurse_content_Data = res.data.course.content;
					this.videoUrl = res.data.course.content[0].children[0].url;//默认第一个视频播放
				})

			},
			mouseOver($event){
				$event.currentTarget.className = "course-items active";
				let one_class = document.getElementsByClassName('course-item active')[0]
				if(one_class){
					one_class.className = 'course-item'
				}else{
					return
				}
			},
			mouseLeave($event) {
				$event.currentTarget.className = "course-items";
			},
			videoSelect(e){
				this.videoUrl = e.currentTarget.dataset.url;
				window.scrollTo(0,0);
				if(this.videoUrl == ''){
					setTimeout(() => {
						this.$toast('无法观看视频');
						this.isLoading = false;
						this.count++;
					}, 100);
				}
			},
			
		},
		components: {
		},
	}
</script>
<style type="text/css" lang="less" scoped>
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
				width: 100%;
				height: 50px;
				display:inline-block;
				.course-items{
					width:100%;
					height:100%;
					display: flex;
					justify-content: space-between;
					align-items:center;
					border-radius:5px;
					padding:0 15px;
				}
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
					display:inline-block;
					font-size: 12px;
					color:#adadad;
					/* color:#333;点击 */
				}
			}
			.course-item.active,.course-items.active{
				background-color: #f5f5f5;
				.course-chadivter-time{
					display:inline-block;
					color:#333;
				}
			}
		}

	}
</style>
