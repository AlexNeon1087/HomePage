<template>
  <div>
    <p>scacacvfevrevfte</p>
    <div id="canvas-header" class="large-header">
      <canvas id="canvas"></canvas>
    </div>
  </div>
</template>

<style lang="less" scoped>
  p {
    background-color: rgb(165, 204, 162);
  }

</style>

<script>
  import "../../assets/js/TweenLite.min.js";
  import "../../assets/js/EasePack.min.js";
  import canvasStart from "../../assets/js/demo-1";
  export default {
    mounted() {
      canvasStart.canvasStar()
    },
  };

</script>
