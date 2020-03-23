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
        <div class="box">
        <Button @click="createTag">新建标签</Button>
        </div>
    </Layout>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component} from "vue-property-decorator";
  import labelBar from "@/models/labelModel";
  import Button from '@/components/Button.vue';
  @Component({
    components: {Button}
  })
  export default class Labels extends Vue {
    labels = window.labelList;

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
    .box{
        text-align: center;
        padding: 16px;
        margin-top: 44-16px;
    }

</style>