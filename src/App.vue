<template>
  <div id="app" class="w">
    <div id="header">
      <div id="logo">
        <img src="./assets/images/logo.png" alt="">
        <span id="kkl">QuarkChain</span>
      </div>
      <ul id="title">
        <li @click="goHomePage">{{ $t("message.header.home") }}</li>
        <li class="service">
          {{ $t("message.header.service") }}
          <ul class="service-menu" v-show="isshowservice">
            <li @click="goTechServer">区块链技术服务</li>
            <li @click="goTradeCion">数字交易所开发</li>
            <li @click="goTechTraining">区块链技术培训</li>
          </ul>
          <i @click="ShoService"></i>
        </li>
        <li @click="aboutUs">
          {{ $t("message.header.aboutUs") }}
        </li>
        <li class="language">
          {{lang}}
          <ul class="language-menu" v-show="isshowlanguage">
            <li @click="chooseEn">english</li>
            <li @click="chooseZh">中文</li>
          </ul>
          <i @click="ShowLanguage"></i>
        </li>
      </ul>
    </div>
    <router-view></router-view>
    <div id="footer">

    </div>
  </div>
</template>

<script>
// import { NavMenu } from "element-ui";
export default {
  data() {
    return {
      lang: "English",
      isshowservice: false,
      isshowlanguage: false
    };
  },
  methods: {
    ShowLanguage() {
         $(".language i").css({
        transform: "rotateX(180deg)"
      });
      this.isshowlanguage = !this.isshowlanguage;
    },
    ShoService() {
      $(".service i").css({
        transform: "rotateX(180deg)"
      });
      this.isshowservice = !this.isshowservice;
    },
    goHomePage() {
      this.$router.push("home");
    },
    goTechServer() {
      this.$router.push("techServer");
      this.isshowservice = !this.isshowservice;
    },
    goTradeCion() {
      this.$router.push("tradeCion");
      this.isshowservice = !this.isshowservice;
    },
    goTechTraining() {
      this.$router.push("techTraining");
      this.isshowservice = !this.isshowservice;
    },
    aboutUs() {
      this.$router.push("aboutUs");
    },
    chooseEn() {
      this.$i18n.locale = "us";
      this.lang = "English";
      this.isshowlanguage = !this.isshowlanguage;
    },
    chooseZh() {
      this.$i18n.locale = "zh";
      this.lang = "中文";
      this.isshowlanguage = !this.isshowlanguage;
    }
  }
};
</script>

 <style lang="less" scoped>
#app {
  position: relative;
}
// .w {
//   margin: 0 auto;
//   width: 1600px;
// }
#header {
  position: absolute;
  top: 0px;
  left: 0px;
  height: 76px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
}
#logo {
  margin-left: 40px;
  cursor: pointer;
  #kkl {
    margin-left: 16px;
    color: #2a61ad;
    font-size: 10px;
    font-family: HiraginoSansGBW3;
  }
}
#title {
  display: flex;
  .service {
    position: relative;
    .service-menu {
      position: absolute;
      top: 22px;
      right: -75px;
    }
    i {
      float: right;
      margin-left: 10px;
      display: inline-block;
      background: url("assets/images/sspirit.png") 152px 902px;
      width: 20px;
      height: 20px;
      transition: all 0.5s;
    }
  }
  .language {
    position: relative;
    .language-menu {
      position: absolute;
      top: 22px;
      right: -50px;
    }
    i {
      float: right;
      display: inline-block;
      background: url("assets/images/sspirit.png") 152px 902px;
      width: 20px;
      height: 20px;
      margin-left: 10px;
      transition: all 0.5s;
    }
  }
  li {
    margin-right: 50px;
    color: #2a61ad;
    font-size: 10px;
    font-family: HiraginoSansGBW3;
    cursor: pointer;
    .service-menu {
    }
    .language-menu {
    }
  }
}
#footer {
  height: 100px;
  background-color: aqua;
}
</style>
