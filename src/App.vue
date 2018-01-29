<template>
  <div id="app" class="w">
    <div id="header">
      <div id="logo">

      </div>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1" @click="goHomePage">{{ $t("message.header.home") }}</el-menu-item>
        <el-submenu index="2">
          <template slot="title">{{ $t("message.header.service") }}</template>
          <el-menu-item index="2-1" @click="goTechServer">区块链技术服务</el-menu-item>
          <el-menu-item index="2-2" @click="goTradeCion">数字交易所开发</el-menu-item>
          <el-menu-item index="2-3" @click="goTechTraining">区块链技术培训</el-menu-item>
        </el-submenu>
        <el-menu-item index="3" @click="aboutUs">
          {{ $t("message.header.aboutUs") }}
        </el-menu-item>
        <el-submenu index="4">
          <template slot="title">{{lang}}</template>
          <el-menu-item index="4-1" @click="chooseEn">english</el-menu-item>
          <el-menu-item index="4-2" @click="chooseZh">中文</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <router-view></router-view>
    <div id="footer">

    </div>
  </div>
</template>

<script>
import { NavMenu } from "element-ui";

export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      lang: "English"
    };
  },
  methods: {
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
    aboutUs() {
      this.$router.push("aboutUs");
    },
    chooseEn() {
      this.$i18n.locale = "us";
      this.lang = "English";
    },
    chooseZh() {
      this.$i18n.locale = "zh";
      this.lang = "中文";
    }
  }
};
</script>

 <style lang="less" scoped>
.w {
  margin: 0 auto;
  width: 1300px;
}
#header {
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid grey;
}

.el-submenu .el-menu-item {
  min-width: 80px;
}

#logo {
  width: 100px;
  height: 60px;
  background-color: aquamarine;
}
#footer {
  height: 100px;
  background-color: aqua;
}
</style>
