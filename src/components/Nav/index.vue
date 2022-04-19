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
                <el-menu-item index="1-1-1">入库员</el-menu-item>
                <el-menu-item index="1-1-2">入库核验员</el-menu-item>
              </el-submenu>
              <el-submenu index="1-2">
                <template slot="title">出库</template>
                <el-menu-item index="1-2-1">出库员</el-menu-item>
                <el-menu-item index="1-2-2">出库核验员</el-menu-item>
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
                <el-menu-item index="3-1-1">选项1</el-menu-item>
                <el-menu-item index="3-1-2">选项2</el-menu-item>
                <el-menu-item index="3-1-3">选项3</el-menu-item>
              </el-submenu>
              <el-submenu index="3-2">
                <template slot="title">卫生</template>
                <el-menu-item index="3-2-1">选项1</el-menu-item>
                <el-menu-item index="3-2-2">选项2</el-menu-item>
                <el-menu-item index="3-2-3">选项3</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title"
                ><h1 style="margin: 0px 25px 0px 0px; width: 150px">
                  员工管理
                </h1></template
              >
              <el-menu-item index="4-1">查看</el-menu-item>
              <el-menu-item index="4-2">修改</el-menu-item>
              <el-menu-item index="4-3">删除</el-menu-item>
              <el-menu-item index="4-3">新增</el-menu-item>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title"
                ><h1 style="margin: 0px 18px 0px 0px; width: 150px">
                  技术管理
                </h1></template
              >
              <el-menu-item index="5-1">备份数据</el-menu-item>
              <el-menu-item index="5-2">恢复数据</el-menu-item>
              <el-menu-item index="5-3">系统维护</el-menu-item>
            </el-submenu>
          </el-menu>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
//按需引入：只是把需要的功能引入进来
// import throttle from "lodash/throttle";
//vuex辅助函数mapState获取仓库数据
// import { mapState } from "vuex";
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

