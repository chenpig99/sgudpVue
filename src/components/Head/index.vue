<template>
  <header class="header">
    <!-- 头部的第一行 -->
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <h1 class="logoArea">
        <router-link class="logo" title="冻品仓储管理系统" to="/home">
          <img src="./images/logo.png" alt="" />
        </router-link>
      </h1>

      <div class="title">
        <h1 style="color: #10778a; font-size: 48px">冻品仓储管理系统</h1>
      </div>
      <div class="searchArea">
        <form action="###" class="searchForm">
          <input
            type="text"
            id="autocomplete"
            class="input-error input-xxlarge"
            v-model="keyword"
          />
          <button
            class="sui-btn btn-xlarge btn-danger"
            type="button"
            @click="goSearch"
          >
            搜索
          </button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
// import { mapState } from "vuex";
export default {
  name: "Footer",
  data() {
    return {
      //收集表单数据---关键字的
      keyword: "",
    };
  },
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
          height: 130px;
          margin: 0px 45px;
        }
      }
    }

    .title {
      margin: 60px 0px 0px 120px;
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

    .searchArea {
      float: right;
      margin-top: 15px;

      .searchForm {
        overflow: hidden;
        margin-right: 45px;

        input {
          box-sizing: border-box;
          width: 300px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid rgb(8, 138, 8);
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 68px;
          background-color: #0f778a;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>
