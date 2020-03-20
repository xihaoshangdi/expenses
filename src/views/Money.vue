<template>
    <Layout class-prefix="layout">
        <Amount/>
        <Headline/>
        <Tags :data-source="Labels" @update:selected="onTagUpdate"/>
        <Date/>
        <Notes/>
        <Types/>
        <Numberpad/>
    </Layout>
</template>

<script lang="ts">

  import Amount from "@/components/Money/Amount.vue";
  import Types from '@/components/Money/Types.vue';
  import Numberpad from '@/components/Money/Numberpad.vue';
  import Notes from '@/components/Money/Notes.vue';
  import Headline from '@/components/Money/Headline.vue';
  import Tags from '@/components/Money/Tags.vue';
  import Date from '@/components/Money/Date.vue';

  import Vue from 'vue';
  import {Component} from "vue-property-decorator";

  @Component({
    components:{
      Amount,Types,Numberpad,Notes,Headline,Tags,Date
    }
  })
  export default class Money extends Vue {
    Labels=['1','2','3','4'];
    selectedLabels: string[]=[];
    onTagUpdate(value: string[]){
      this.selectedLabels=value;
      console.log(this.selectedLabels.toString());
    }
  }
</script>

<style lang="scss">
    @import "~@/assets/styles/global.scss";
    //全局样式 通过前缀传给layout Take effect
    .layout-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
</style>

