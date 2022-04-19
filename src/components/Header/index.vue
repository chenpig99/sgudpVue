<template>
  <div class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="typeList">
          <!-- <p v-else> -->
            <!-- <a>{{ userInfo.name }}</a> -->
          <a class="register" @click="logout">退出登录</a></i>
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
            <i class="el-icon-user"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>用户名：{user.userName}
               <!-- <p v-else> -->
            <!-- <a>{{ userInfo.name }}</a> --></el-dropdown-item>
            <el-dropdown-item>账号：</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    
  </div>
</template>

<script>
// import {mapState} from 'vuex';
export default {
  name: "Header",
  data() {
    return {
      // in component:
      //收集表单数据---关键字的
      keyword: "",
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("Authorization");
      localStorage.removeItem("currentUser_name");
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped lang="less">
.header {
  & > .top {
    display: flex;
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;
      .typeList {
        margin-right: 45px;
      }

      .el-dropdown-link {
        cursor: pointer;
        color: #409eff;
      }
      p {
        float: left;
        margin-right: 10px;

        .register {
          border-left: 1px solid #b3aeae;
          padding: 0 1px;
          margin-left: 5px;
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;

          & + a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
