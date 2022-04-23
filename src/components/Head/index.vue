<template>
  <div class="header">
    <!-- 头部的第一行 -->
    <div class="bottom">
      <h1 class="logoArea">
        <router-link class="logo" title="冻品仓储管理系统" to="/home">
          <img src="./images/logo.png" alt="" />
        </router-link>
      </h1>
      <div class="right">
        <div class="top">
          <div class="container">
             <div class="typeList" >
              <!-- <p v-else> -->
               <!-- <a>{{ userInfo.name }}</a> -->
              <!-- <a class="register" >退出登录</a> -->
             <el-dropdown>
                <span class="el-dropdown-link">
                   <i class="el-icon-setting"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                   <el-dropdown-item>设置</el-dropdown-item>
                   <el-dropdown-item>帮助</el-dropdown-item>
                </el-dropdown-menu>
             </el-dropdown>
             <el-dropdown>
                <span class="el-dropdown-link">
                    <i class="el-icon-user">{{userName}}</i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <!-- @click.native修饰符表示原生的点击事件 -->
                <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
             </el-dropdown>
            </div>
          </div>
        </div>
        <div class="title">
          <h1 style="color: #10778a; font-size: 48px">冻品仓储管理系统</h1>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
     
  </div>
</template>

<script>
// import { mapState } from "vuex";
export default {
  name: "Footer",
  data() {
    return {
    userName:localStorage.currentUser_name
    };
  },
  methods:{
    logout(){
    localStorage.removeItem('token'),
    localStorage.removeItem('currentUser_name'),
    localStorage.removeItem('Authorization'),
   
      this.$router.push('/login')
    }
  }
};
</script>

<style scoped lang="less">
  .header {
 & > .bottom {
    width: 1200px;
    margin: 0 auto;
    height: 160px;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 125px;
          height: 140px;
          margin: 0px 45px;
        }
      }
    }
    .right{
      float: right;
      width: 900px;
      height: 160px;
      margin-right: 45px;
        .container {
        height: 30px;
        line-height: 30px;
          overflow: hidden;
         .typeList {
               float: right;
        height: 28px;
        width: 150x;
        .el-dropdown-link {
         cursor: pointer;
         color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
      }
        }
      .title {
      margin:0px 0px 0px 70px;
      width: 600px;
      height: 10px;

      .h1 {
        color: #0f778a;
        font-size: 18em;
        font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
          "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
        font-weight: bold;
      }
    }
    }
  }
  }
</style>
