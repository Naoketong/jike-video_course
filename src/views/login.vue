<template>
  <!-- <div style="color:red">登录页 观看视频认证+获取二维码弹窗</div> -->
  <div class="contaianer">
    <div class="login-section">
      <div class="login-content">
        <div class="login-logo">
          <img
            src="@/assets/img/logo.png"
            alt="企业logo"
            class="login-logo-img"
          />
        </div>
        <div class="login-content">
          <div class="login-input_list">
            <div class="login-input_item">
              <p class="input-name">企业</p>
              <input class="input-main" type="text" value="获取企业信息" />
              <div class="login-input-scan">
                <img src="@/assets/img/scan.png" class="scan-icon" />
              </div>
            </div>
            <div class="login-input_item">
              <p class="input-name">工号</p>
              <input class="input-main" type="text" value="请输入工号" />
            </div>
          </div>
          <div class="login-button">提交</div>
          <div class="login-sub">
            <img src="@/assets/img/Group-3.png" class="login-sub-img" />
            <p class="login-sub-text"  @click="get_code">如何获取企业二维码</p>
          </div>
        </div>
      </div>
      <div class="login-botton_banner">
        <img src="@/assets/img/banner-bottom.png" class="banner_img" />
      </div>
    </div>
    <div class="login-mask" v-show="mask_page">
      <img src="@/assets/img/mask.png" class="mask-banner" />
      <span class="login-mask-icon" @click="dont_mask">X</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      mask_page:false,
    };
  },
  created() {},
  methods: {
    get_code(){
      this.mask_page = true;
    },
    dont_mask(){
      this.mask_page = false;
    },
  },
  components: {}
};
</script>
<style type="text/css" lang="less" scoped>
.contaianer {
  padding: 23px;
}
.login-section {
  .login-content {
    width: 100%;
    /* text-align: center; */
    .login-logo {
      display: flex;
      justify-content: center;
      margin: 57px 0 72px 0;
      .login-logo-img {
        width: 117px;
        height: 52px;
      }
    }
    .login-input_list {
      font-size: 0;
      margin-bottom: 40px;
      .login-input_item {
        position: relative;
        border-bottom: 1px solid #e5e7f0;
        height: 57px;
        .input-name {
          display: inline-block;
          font-size: 16px;
          line-height: 50px;
          color: #252222;
          margin-right: 18px;
        }
        .input-main {
          font-size: 16px;
          line-height: 50px;
          color: #b5b5b5;
        }
        .input-main.active {
          color: #0fc700;
        }
        .login-input-scan {
          position: absolute;
          top: 10px;
          right: 0;
          width: 92px;
          height: 34px;
        }
      }
    }
    .login-button {
      width: 100%;
      line-height: 50px;
      font-size: 18px;
      text-align: center;
      color: #fdfdfd;
      background-color: #d4d4d4;
    }
    .login-button.active {
      background-color: #0fc700;
      color: #f0fdf7;
    }
    .login-sub {
      margin-top: 30px;
      text-align: center;
      .login-sub-img {
        vertical-align: middle;
        margin-right: 8px;
      }
      .login-sub-text {
        display: inline-block;
        vertical-align: middle;
        font-size: 14px;
        color: #0fc700;
      }
    }
  }
  .login-botton_banner {
    height: 45%;
  }
}
.login-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.6);
  .mask-banner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .login-mask-icon{
    position:absolute;
    bottom:50px;
    left: 50%;
    transform: translateX(-50%);
    width:40px;
    line-height:40px;
    color:15px;
    color: rgba(255,255,255,.8);
    border:2px solid rgba(255,255,255,.4);
    text-align:center;
    border-radius:50%;
  }
}
</style>
