<template>
  <div class="type-nav">
    <div class="container">
        <nav class="nav">
          <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-submenu
              index="1"
              style="margin-left: 45px; background-color: #10778a"
            >
              <template slot="title"
                ><h1 style="margin: 0px 25px 0px 0px; width: 150px">
                  物流管理
                </h1></template
              >
                <el-submenu index="1-1">
                   <template slot="title">入库</template>
                   <el-menu-item index="1-1-1" @click="Input">入库员</el-menu-item>
                   <el-menu-item index="1-1-2" @click="inputCheck">入库核验员</el-menu-item>
                </el-submenu>
                <el-submenu index="1-2">
                   <template slot="title">出库</template>
                   <el-menu-item index="1-2-1" @click="output">出库员</el-menu-item>
                   <el-menu-item index="1-2-2" @click="outputCheck">出库核验员</el-menu-item>
               </el-submenu>
             </el-submenu>
             <el-submenu index="2">
               <template slot="title"
                ><h1 style="margin: 0px 25px 0px 0px; width: 150px">
                  货物管理
                </h1></template
              >
                 <el-menu-item index="2-1" @click="check">查看</el-menu-item>
                 <el-menu-item index="2-2" @click="modify">修改</el-menu-item>
                 <el-menu-item index="2-3" @click="remove">删除</el-menu-item>
             </el-submenu>
            <el-submenu index="3">
              <template slot="title"
                ><h1 style="margin: 0px 25px 0px 0px; width: 150px">
                  仓库管理
                </h1></template
              >
              <el-submenu index="3-1">
                <template slot="title">仓库</template>
                <el-menu-item index="3-1-1" @click="check">肉类</el-menu-item>
                <el-menu-item index="3-1-2" @click="pro">加工食品类</el-menu-item>
                <el-menu-item index="3-1-3" @click="gar">果蔬类</el-menu-item>
                <el-menu-item index="3-1-4" @click="chi">蛋类</el-menu-item>
              </el-submenu>
              <el-submenu index="3-2">
                <template slot="title">卫生</template>
                <el-menu-item index="3-2-1" @click="huan">肉类</el-menu-item>
                <el-menu-item index="3-2-2" @click="jiagong">加工食品类</el-menu-item>
                <el-menu-item index="3-2-3" @click="guoshu">果蔬类</el-menu-item>
                <el-menu-item index="3-2-4" @click="egg">蛋类</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title"
                ><h1 style="margin: 0px 25px 0px 0px; width: 150px">
                  员工管理
                </h1></template
              >
              <el-menu-item index="4-1" @click="check2">查看</el-menu-item>
              <el-menu-item index="4-4" @click="handle2">处理</el-menu-item>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title"
                ><h1 style="margin: 0px 18px 0px 0px; width: 150px">
                  技术管理
                </h1></template
              >
              <el-menu-item index="5-1" @click="backup">备份数据</el-menu-item>
              <el-menu-item index="5-2" @click="recover">恢复数据</el-menu-item>
              <el-menu-item index="5-3">系统维护</el-menu-item>
            </el-submenu>
          </el-menu>
        </nav>
    </div>
 </div>
   
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    check() {
      this.$router.push({ path: "/check" });
    },
    modify() {
       this.$router.push({ path: "/modify" });
    },
    remove() {
       this.$router.push({ path: "/remove" });
     },
     check2() {
      this.$router.push({ path: "/check2" });
    },
    handle2() {
      this.$router.push({ path: "/handle2" });
    },
    Input(){
       this.$router.push("/firstInput");
    },
    inputCheck(){
      this.$router.push("/totalCheck");
    },
     output(){
      this.$router.push("/output");
    },
      outputCheck(){
      this.$router.push("/outputCheck");
    },
     backup(){
      this.$router.push("/backup");
    },
     recover(){
      this.$router.push("/recover");
    },
    huan(){
      this.$router.push("/huanjing");
    },
    jiagong(){
      this.$router.push("/jiagong");
    },
    guoshu(){
      this.$router.push("/vegetable");
    },
    egg(){
      this.$router.push("/henapple");
    },
    pro(){
      this.$router.push("/process");
    },
    gar(){
      this.$router.push("/garden");
    },
    chi(){
      this.$router.push("/chicken");
    },
  },
};
</script >

<style  scoped lang="less">
.type-nav {
  border-bottom: 1px solid #0f7689;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;
    .nav {
      margin-left: 45px;
    }
  }
}
</style>

