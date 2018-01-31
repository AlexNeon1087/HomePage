<template>
  <div id="app" class="w">
    <div id="header">
      <div id="logo">
        <img src="./assets/images/logo.png" alt="">
        <span id="kkl">QuarkChain</span>
      </div>
      <ul id="title"  :class="animate" @mouseover="addAnimate" @mouseout="removeAnimate">
        <li @click="goHomePage">{{ $t("message.header.home") }}</li>
        <li class="service">
          {{ $t("message.header.service") }}
          <ul class="service-menu">
            <li @click="goTechServer">Professional service</li>
            <li @click="goTradeCion">Digital Exchange Development</li>
            <li @click="goTechTraining">Block chain Technical Training</li>
          </ul>
        </li>
        <li @click="aboutUs">
          {{ $t("message.header.aboutUs") }}
        </li>
        <li class="language">
          {{lang}}
          <ul class="language-menu">
            <li @click="chooseEn">english</li>
            <li @click="chooseZh">Zh</li>
          </ul>
        </li>
      </ul>
    </div>
    <router-view></router-view>
    <div id="footer">

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lang: "English",
      animate:""
    };
  },
  methods: {
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
      this.lang = "Zh";
      this.isshowlanguage = !this.isshowlanguage;
    },
    addAnimate(){
      this.animate="animated bounce";
    },
    removeAnimate(){
      this.animate =""
    }
  }
};
</script>

 <style lang="less" scoped>
#app {
  position: relative;
}
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
  &:hover{

  }
  li {
    height: 50px;
    line-height: 50px;
    margin-right: 50px;
    color: #2a61ad;
    font-size: 10px;
    font-family: HiraginoSansGBW3;
    cursor: pointer;
    &.service {
      position: relative;
      &:hover {
        .service-menu {
          display: block;
        }
      }
      .service-menu {
        width: 250px;
        display: none;
        position: absolute;
        top: 36px;
        right: -137px;
        li {
          height: 16px;
          line-height: 16px;
        }
      }
    }
    &.language {
      &:hover {
        .language-menu {
          display: block;
        }
      }
      position: relative;
      .language-menu {
        display: none;
        position: absolute;
        top: 36px;
        right: -50px;
        li {
          height: 16px;
          line-height: 16px;
        }
      }
    }
  }
}
#footer {
  height: 100px;
  background-color: aqua;
}
</style>
