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
    mounted() {
      this.fullpage()
    },
    beforeDestroy(){
      $.fn.fullpage.destroy('all')
    },
    methods: {
      fullpage() {
          $('#fullpage').fullpage({
            sectionsColor: ["#f9dd67", "#84a2d4", "#ef674d", "#ffeedd", "#cf4759", "#85d9ed", "#8ac060",
              "#84d9ed"
            ],
            navigation: true,
          });
      },

    }
  }

</script>
