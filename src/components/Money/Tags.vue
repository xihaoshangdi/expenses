<template>
    <div class="box">
        <Icon name="labels" class-prefix="information"></Icon>
        <ul class="tagList">
            <li
                    v-for="item of dataSource"
                    :key="item"
                    @click="toggle(item)"
                    :class="{'selected':selectedTags.indexOf(item)>=0}"
            >{{item}}</li>
        </ul>
        <button class="tagBtn" @click="create">点击生效</button>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from "vue-property-decorator";

  @Component
  export default class Tags extends Vue {
    @Prop(Array) dataSource: string[]|undefined;
    selectedTags: string[] = [];
    toggle(tag: string) {
      const index = this.selectedTags.indexOf(tag);
      if (index < 0) {
        this.selectedTags.push(tag);
        return
      }
      this.selectedTags.splice(index, 1);
    }
    create(){
      const name = window.prompt('请输入标签名');
      if (name === '') {
        window.alert('标签名不能为空');
      } else if (name===null){
        return
      }
      else if (this.dataSource) {
        this.$emit('update:dataSource',
          [...this.dataSource, name]);
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import "~@/assets/styles/global.scss";
    .box{
        @extend %informationBox
    }
    .tagList {
        width: 60vw;
        margin-left: 15px;
        display: flex;
        flex-direction: row;

        > li {
            background: $rgba;
            $h: 24px;
            height: $h;
            line-height: $h;
            border-radius: $h/2;
            padding: 0 10px;
            margin-right: 10px;

            &.selected{
                background: $tag-choose-bg;
                color: $tag-choose-color;
            }
        }
    }
    .tagBtn{
        text-wrap: none;
        background: transparent;
        border: none;
    }

</style>