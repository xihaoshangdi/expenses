<template>
    <div class="box">
        <Icon name="date" class-prefix="information"></Icon>

    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  @Component
  export default class Date extends Vue {
  }
</script>

<style lang="scss" scoped>
    @import "~@/assets/styles/global.scss";

    .box {
        @extend %informationBox
    }

    .date {
        width: 80vw;
        margin-left: 15px;
        display: flex;
        flex-direction: row;
    }

</style>