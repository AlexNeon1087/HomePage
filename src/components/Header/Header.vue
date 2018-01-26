<template>
  <div id="header">
    <div id="logo">

    </div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1" @click="goHomePage">首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">专业服务</template>
        <el-menu-item index="2-1" @click="goTechServer">区块链技术服务</el-menu-item>
        <el-menu-item index="2-2" @click="goTradeCion">数字交易所开发</el-menu-item>
        <el-menu-item index="2-3" @click="goTechTraining">区块链技术培训</el-menu-item>
      </el-submenu>
      <el-menu-item index="3" @click="aboutUs">
        关于我们
      </el-menu-item>
      <el-menu-item index="4">
        language
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style less="lang" scoped>
#header {
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid grey;
}

.el-submenu .el-menu-item {
  min-width: 130px;
}

#logo {
  width: 100px;
  height: 60px;
  background-color: aquamarine;
}
</style>

<script>
import { NavMenu } from "element-ui";

export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      
    },
    goHomePage() {
      this.$router.push("home");
    },
    goTechServer() {
      this.$router.push("techServer");
    },
    goTradeCion() {
      this.$router.push("tradeCion");
    },
    goTechTraining() {
      this.$router.push("techTraining");
    },
    aboutUs(){
      this.$router.push("aboutUs");
    }
  }
};
</script>
