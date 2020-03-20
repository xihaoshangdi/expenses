<template>
    <Layout class-prefix="layout">
        <Amount :data-money.sync="money"/>
        <Headline/>
        <Tags :data-source="labels" @update:value="onTagUpdate"/>
        <Date/>
        <Notes @update:value="onNotesUpdate"/>
        <Types @update:value="onTypeUpdate"/>
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
    //
    money='';
    labels=['1','2','3','4'];
    selectedLabels: string[]=[];
    onTagUpdate(value: string[]){
      this.selectedLabels=value;
      console.log(this.selectedLabels.toString());
    }
    onNotesUpdate(value: string){
      console.log(value);
      this.money=value;
    }
    onTypeUpdate(value: string){
      console.log(value);
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

