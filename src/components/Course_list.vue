<template>
  <div class="course-list" v-model="courseData">
    <div class="course-item" v-for="item in courseData" @click="hand_jump">
      <div class="course-main_img">
        <img :src="item.cover_url" class="main-img_banner">
        <img v-if="item.status_label" src="@/assets/img/The-latest.png" class="main-img_thelates">
        <img v-if="item.difficulty_level_label == '入门'" src="@/assets/img/level-1.png" class="main-img_level">
        <img v-if="item.difficulty_level_label == '进阶'" src="@/assets/img/level-2.png" class="main-img_level">
        <img v-if="item.difficulty_level_label == '高阶'" src="@/assets/img/level-3.png" class="main-img_level">
      </div>
      <div class="course-text">
        <div class="course-main_title">
          {{item.name}}
        </div>
        <div class="course-main_text">{{item.introduction}}</div>
        <div class="course-main_time">
          <div class="time-when">{{item.total_duration}}</div>
          <div class="course-main_class">{{item.sort}}课时</div>
        </div>
      </div>
    </div>
          
  </div>

</template>

<script>
  import courseModel from '@/models/course.js'
export default {
  name: 'Course_list',
  props: {
    defaultActive: String,
    courseData:{
      type:Array,
      required:true,
    }
  },
  data(){
    return{
      
    }
  },
  created () {
   
  },
  methods: {
    hand_jump(e){
      console.log(e)
      // let id = id;
      // console.log('跳转了')
      // this.$router.push(	'course/' + id );
    },
   
  },
  components: {
  }
}
</script>

<style scoped lang="less" scoped>
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
          font-weight: 400;
          color: #999;
          margin: 8px 0;
          width:150px;
          height:20px;
          overflow: hidden;
					text-overflow:ellipsis;
					white-space: nowrap;
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

</style>
