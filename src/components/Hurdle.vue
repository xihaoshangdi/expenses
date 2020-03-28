<template>
    <div class="hurdle" :class="classPrefix && `${classPrefix}-hurdle`">
        <div>{{title}}</div>
        <Icon :name="icon"/>
    </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component, Prop} from "vue-property-decorator";

  @Component
  export default class Hurdle extends Vue {
    @Prop(String) title: string | undefined;
    @Prop(String) icon: string | undefined;
    @Prop(String) classPrefix?: string;

  }
</script>

<style lang="scss" scoped>
    @import "~@/assets/styles/global.scss";

    .hurdle {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 25px 20px 20px 35px;
        font-size: 22px;
        max-height: 7vh;
        background-color: #4388e9;
        color: #ecfbfc;
    }

</style>