<template>
    <Layout>
        <div class="labels">
            <router-link
                    class="label"
                    v-for="label of labels"
                    :key="label.id"
                    :to="`labels/edit/${label.id}`"
            >
                <span>{{label.name}}</span>
                <Icon name="right"/>
            </router-link>
        </div>
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
      labelBar.creat();
    }
  }
</script>

<style lang="scss" scoped>
    @import "~@/assets/styles/global.scss";
    @import "~@/assets/styles/labels.scss";

    .labels {
        background: $label-bg;
        font-size: 16px;
        padding-left: 16px;
        .label {
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
        display: flex;
        justify-content: center;
        margin-top: 30px;
    }
</style>