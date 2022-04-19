<template>
  <div>
    添加图片，大小可自定
    <div class="home">
      <h1>欢迎使用本系统，用户可以根据导航栏的信息进行作业.......</h1>
    </div>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      // in component:
      //收集表单数据---关键字的
      keyword: "",
    };
  },
};
</script>
<style lang="less"scoped>
div {
  width: 1120px;
  margin: 0 auto;
  height: 410px;
  overflow: hidden;
  background-color: aquamarine;
  .home {
    width: 600px;
    height: 300px;
    margin: 50px 200px 0px 250px;
    background-color: blue;
  }
}
</style>
