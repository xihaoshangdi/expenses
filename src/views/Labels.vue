<template>
    <Layout>
        <ol class="labels">
            {{labels}}
            <li v-for="label of labels" :key="label">
                <span>{{label}}</span>
                <Icon name="right"/>
            </li>
        </ol>
        <div class="btn" @click="createTag">
            <Icon class-prefix="labels" name="添加"/>
        </div>
    </Layout>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component} from "vue-property-decorator";
  import labelBar from "@/models/labelModel";

  @Component
  export default class Labels extends Vue {
    labels = labelBar.extract();
    createTag() {
      const name = window.prompt("请输入标签名");
      if (name === "" && name === null) {
        window.alert("标签名不能为空");
      } else if(name!==null){
        console.log(name);
        labelBar.creat(name);
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import "~@/assets/styles/global.scss";
    @import "~@/assets/styles/labels.scss";

    .labels {
        border: $t;
        background: $label-bg;
        font-size: 16px;
        padding-left: 16px;

        > li {
            min-height: 45px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-left: 10px;
            padding-right: 10px;
            border-bottom: $label-hr;
        }
    }

    .btn {
        border: $t;
        display: flex;
        justify-content: center;
        margin-top: 30px;
    }
</style>