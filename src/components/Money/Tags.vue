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

  @Component
  export default class Tags extends Vue {
    @Prop(Array) readonly dataTags!: string[];

    tagList: string[] = this.dataTags;

    get labels() {
      return this.$store.state.labelsList;
    }

    created(): void {
      this.$store.commit("extractLabel");

    }

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
      this.$store.commit("creatLabel");
    }
  }
</script>

<style lang="scss" scoped>
    @import "~@/assets/styles/global.scss";

    ::v-deep .information-icon {
        width: 1.5em;
        height: 1.5em;
        position: absolute;
        left: 40px;
    }

    .box {
        @extend %informationBox;
    }

    .tagList {
        width: 230px;
        display: flex;
        overflow-x: auto;

        > li {
            $h: 24px;
            height: $h;
            line-height: $h;
            border-radius: $h/2;
            min-width: 24px;
            background: #007EE5;
            color: whitesmoke;
            flex: none;
            margin-right: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            > .icon {
                display: none;
            }
            &.selected {
                color: whitesmoke;
                background-color: #45A1FF;
                height: $h;
                width: $h;
                > .icon {
                    display: block;
                }
                > .item {
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