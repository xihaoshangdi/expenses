<template>
   <div class="box">
       <div><button class="btn" @click="onchange">{{value}}</button></div>

       <img src="../assets/image/qrcode.png" alt="qrcode">
       <span>扫码获得更好的浏览体验</span>
   </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component} from "vue-property-decorator";

  @Component
  export default class Qrcode extends Vue {
    value='github';
    onchange(){
      if (this.value==='github'){
        this.value='码云';
      }else {
        this.value='github';
      }
    }
  }
</script>

<style lang="scss" scoped>
    .box{
        border: 1px solid red;
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        > img{
            max-width: 800px;
            max-height: 800px;
        }

    }
    .btn{
        font-size: 100px;
        border: none;
        outline: none;
        width:600px;
        height: 300px;
        border-radius: 5%;
        background-color: rgba(0,0,0,0.3);
    }
</style>