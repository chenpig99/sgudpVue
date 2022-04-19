<template>
  <div>
    <div class="top">
      <div class="left">
        <div class="logoArea">
          <img
            src="./images/logo.png"
            style="width: 200px; height: 180px; margin: 100px 20px 10px 180px"
            alt=""
          />
        </div>
        <div class="login">
          <!--flex弹性盒子模型，justify-content：主抽 -->
          <div
            style="
              display: flex;
              margin-top: 10px;
              margin-left: 100px;
              margin-bottom: 220px;
            "
          >
            <div>
              <el-card style="width: 400px">
                <div slot="header" class="clearfix">
                  <span>账号登录</span>
                </div>
                <table>
                  <tr>
                    <td>用户名</td>
                    <td>
                      <el-input
                        v-model="user.userName"
                        placeholder="请输入用户名"
                      ></el-input>
                    </td>
                  </tr>
                  <tr>
                    <td>密码</td>
                    <td>
                      <el-input
                        type="password"
                        v-model="user.userPassword"
                        placeholder="请输入密码"
                        @keydown.enter.native="doLogin"
                      ></el-input>
                      <!-- @keydown.enter.native="doLogin"当按下enter键的时候也会执行doLogin方法-->
                    </td>
                  </tr>
                  <tr>
                    <!-- 占两行-->
                    <td colspan="2">
                      <!-- 点击事件的两种不同的写法v-on:click和 @click-->
                      <!--<el-button style="width: 300px" type="primary" v-on:click="doLogin">登录</el-button>-->
                      <el-button
                        style="width: 300px"
                        type="primary"
                        @click="doLogin"
                        >登录</el-button
                      >
                    </td>
                  </tr>
                </table>
              </el-card>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <img src="./images/login.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
import axios from '../axios';
export default {

  // retuendata:{
  //     data:'',
  //     code:'',
  //     msg:'',
  //     }
  //   },
  //单页面中不支持前面的data:{}方式
  data() {
    //相当于以前的function data(){},这是es5之前的写法，新版本可以省略掉function
    return {
      //之前是在里面直接写username，password等等，但是这里要写return
      //因为一个组件不管要不要被其他组件用，只要这样定义了，它就会认为可能这个组件会在其他的组件中使用
      //比如说在这里定义了一个变量，然后把这个组件引入到A组件中，A组件中修改了这个变量
      //同时这个组件也在B组件中引用了，这时候A里面一修改，B里面也变了，它们用的是一个值
      //可是一般来说可能希望在不同的组件中引用的时候，使用不同的值，所以这里要用return
      //这样在A组件和B组件分别引用这个变量的时候是不会互相影响的
      user: {
        userPassword: "",
        userName: "",
        //为了登录方便，可以直接在这里写好用户名和密码的值
      },
      retuendata: {
        data: "",
        code: "",
        msg: "",
        //为了登录方便，可以直接在这里写好用户名和密码的值
      },
    };
  },
  methods: {
    doLogin() {
      // this.$router.resolve({
      //   path: "/home",
      // });

      //一点击登录按钮，这个方法就会执行
      const name = this.user.userName;
      axios({
        method: "POST",
        url: "/user/login",
        data: JSON.stringify(this.user),
        headers: {
          "Content-Type": "application/JSON",
        },
      }).then((res) => {
          localStorage.setItem("currentUser_name", name);
          localStorage.setItem("Authorization", res.headers.authorization);
          this.$router.push({ path: "/home" ,params:{namek:name}});
      }).catch(error=>{
        this.$alert(error.response.data.msg, '错误', {
          confirmButtonText: '确定',
          callback: action => {
            
          }
        });
      });
    },
  },
};
</script>

<style lang="less" scoped>
.top {
  background-color: #56d0be;
  display: flex;
  margin-left: 150px;
  width: 1200px;
  height: 630px;

  .left {
    .logoArea {
      .logo {
        width: 300px;
        height: 300px;
      }
    }
  }
  .right {
    display: flex;
    margin: 100px 0px 0px 200px;
    width: 460px;
    height: 400px;
  }
}
</style>