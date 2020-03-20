<template>
    <div class="box">
        <Icon name="labels" class-prefix="information"></Icon>
        <ul class="tagList">
            <li
                    v-for="item of dataSource"
                    :key="item"
                    @click="toggle(item)"
                    :class="{'selected':dataTags.indexOf(item)>=0}"
            >{{item}}
            </li>
        </ul>
        <button class="tagBtn" @click="create">Add</button>
    </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component, Prop} from "vue-property-decorator";

  @Component
  export default class Tags extends Vue {
    @Prop(Array) readonly dataSource!: string[];
    @Prop(Array) readonly dataTags!: string[];

    tagList: string[] = this.dataTags;

    toggle(tag: string) {
      const index = this.dataTags.indexOf(tag);
      if (index < 0) {
        this.tagList.push(tag);
      } else {
        this.tagList.splice(index, 1);
      }
      // this.$emit('xxx',this.selectedTags);
      this.$emit("data-tags", this.tagList);
    }

    create() {
      const name = window.prompt("请输入标签名");
      if (name === "") {
        window.alert("标签名不能为空");
      } else if (name === null) {
        return;
      } else if (this.dataSource) {
        console.log("here");
        this.$emit("update:dataSource",
          [...this.dataSource, name]);
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import "~@/assets/styles/global.scss";

    .box {
        @extend %informationBox
    }

    .tagList {
        width: 70vw;
        margin-left: 15px;
        display: flex;
        flex-direction: row;
        overflow-x: auto;
        position: relative;

        > li {

            background: $rgba;
            $h: 24px;
            height: $h;
            line-height: $h;
            border-radius: $h/2;
            padding: 0 10px;
            margin-right: 10px;
            flex: none;

            &.selected {
                background: $tag-choose-bg;
                color: $tag-choose-color;
            }
        }
    }

    .tagBtn {
        right: 15px;
        position: absolute;
        border: none;
        background: transparent;
    }

</style>