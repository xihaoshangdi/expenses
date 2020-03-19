<template>
    <Layout class-prefix="layout">
        <Amount/>
        <Title/>
        <Tags :data-source="Labels"/>
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
  import Title from '@/components/Money/Title.vue';
  import Tags from '@/components/Money/Tags.vue';
  import Date from '@/components/Money/Date.vue';

  export default {
    name: "money",
    components: {Date, Tags, Title, Notes, Numberpad, Types, Amount},
    data(){
      return{
        Labels:['1','2','3','吃']
      }
    }

  };
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

