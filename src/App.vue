<template>
  <div id="app" class="w">
    <Header></Header>
    <router-view ></router-view>
    <div id="footer">
      
    </div>
  </div>
</template>

<script>
import Header from "./components/Header/Header.vue";
export default {
  components: {
    Header
  }
};
</script>

 <style lang="less" scoped>
    .w {
    margin: 0 auto;
    width: 1300px;
  }
  #footer{
    height: 100px;
    background-color: aqua;
  }
</style>
