<template>
  <div id="app">

    <router-view/>
    <hr>
  </div>
</template>

<style lang="scss">
  @import "~@/assets/styles/reset.scss";
  @import "~@/assets/styles/global.scss";
  body{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: $font-color;
    font-family: $font-hei;
    font-size: 16px;
    line-height: 1.5;
    background-color: $body-bg;
  }

</style>

<script>

  export default {

  }
</script>