<template>
    <ul class="types">
        <li :class="dataType==='-'&&'selected'" @click="changeType('-')">支出</li>
        <li :class="dataType==='+'&&'selected'" @click="changeType('+')">收入</li>
    </ul>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component,Prop} from "vue-property-decorator";

    @Component
    export default class Types extends Vue {
      @Prop(String) readonly dataType: string | undefined;
      changeType(type: string) {
        if (type !== '-' && type !== '+') {
          throw new Error('type error')
        } else {
          this.$emit("update:data-type",type);
        }
      }
    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/styles/global.scss";
    .types {
        background: $number-pad;
        display: flex;
        text-align: center;
        font-size: 24px;
        > li {
            flex-grow: 1;
            height: 64px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            &.selected::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 4px;
                background: #333;
            }
        }
    }
</style>