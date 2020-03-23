<template>
    <div class="box">
        <Icon name="labels" class-prefix="information"></Icon>

        <ul class="tagList">
                <li
                        v-for="label of labels"
                        :key="label.id"
                        @click="toggle(label.name)"
                        :class="{'selected':dataTags.indexOf(label.name)>=0}"
                >
                    <span class="icon"><Icon :name='label.name'/></span>
                   <span class="item">{{label.name}}</span>
                </li>
        </ul>
        <button class="tagBtn" @click="create">Add</button>
    </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component, Prop} from "vue-property-decorator";
  import labelBar from "@/models/labelModel";

  @Component
  export default class Tags extends Vue {
    @Prop(Array) readonly dataTags!: string[];
    labels=window.labelList;

    tagList: string[] = this.dataTags;

    toggle(tag: string) {
      const index = this.dataTags.indexOf(tag);
      if (index < 0) {
        this.tagList.push(tag);
      } else {
        this.tagList.splice(index, 1);
      }
      this.$emit("update:data-tags", this.tagList);
    }

    create() {
     labelBar.creat();
    }
  }
</script>

<style lang="scss" scoped>
    @import "~@/assets/styles/global.scss";

    .box {
        @extend %informationBox;
        position: relative;
    }

    .tagList {
        width: 70vw;
        margin-left: 15px;
        display: flex;
        overflow-x: auto;
        > li {
            background: $rgba;
            $h: 24px;
            height: $h;
            line-height: $h;
            border-radius: $h/2;
            padding: 0 10px;
            margin-right: 10px;
            flex: none;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            > .icon{
                display: none;
            }
            &.selected {
                background: $tag-choose-bg;
                color: $tag-choose-color;
                height: $h;
                width: $h;
                padding: 0;
                > .icon{
                    display: block;
                }
                > .item{
                    display: none;
                }
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