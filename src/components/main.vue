<!--  -->
<template>
<div class='a'>
<ElButton type="button" @click="cancellation">注销</ElButton>
<ElButton type="button" @click="text">测试</ElButton>
</div>
</template>

<script>
import axios from 'axios';
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
  //退出函数
 cancellation() {
  localStorage.removeItem("token");
  localStorage.removeItem("currentUser_name");
  this.$router.push('/login');
},
text(){
  axios({
    url:'/se',

  })
}
},



}
</script>
<style  scoped>

</style>