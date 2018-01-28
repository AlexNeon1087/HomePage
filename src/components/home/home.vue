<template>
  <div>
    <div id="fullpage">
      <div class="section">
        <h3>第一屏</h3>
      </div>
      <div class="section">
        <h3>第二屏</h3>
      </div>
      <div class="section">
        <h3>第三屏</h3>
      </div>
      <div class="section">
        <h3>第四屏</h3>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>

</style>

<script>

  import '../../assets/lib/fullpage/jquery.fullpage.min.js'
  export default {
    created() {
      this.fullpage()
    },
    methods: {
      fullpage() {
        $('#fullpage').fullpage();
      }
    }
  }

</script>
