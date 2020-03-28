<template>
    <ul
            class="tabs"
            :class="{[classPrefix+'-tabs']: classPrefix}"
    >
        <li
                class="tabs-item"
                v-for="item of tabs" :key="item.value"
                :class="{selected:value===item.value}"
                @click="onTabChanged(item.value)"
        >{{item.text}}</li>
    </ul>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component, Prop} from "vue-property-decorator";
  type Tab={
    id: string;
    name: string;
  }
  @Component
  export default class Tabs extends Vue {
    @Prop({required:true,type:Array}) tabs!: Tab[];
    @Prop({required:true,type:String}) value!: string;
    @Prop(String) classPrefix?: string;

    onTabChanged(tab: string){
      this.$emit('update:value',tab);
    }

  }
</script>

<style lang="scss" scoped>
    @import "~@/assets/styles/global.scss";
    .tabs{
        display: flex;
        text-align: center;
        font-size: inherit;
        color: inherit;
        &-item{
            flex-grow: 1;
            padding: 10px 0;
            position: relative;
            &.selected::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 1px;
                background: rgba(0,0,0,.3);
            }
        }
    }
</style>