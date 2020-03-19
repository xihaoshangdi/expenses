<template>
    <Layout class-prefix="layout">
        <Amount/>
        <Information/>
        <Notes/>
        <Types/>
        <Numberpad/>
    </Layout>
</template>

<script lang="ts">

  import Amount from "@/components/Money/Amount.vue";
  import Information from "@/components/Money/Information.vue";
  import Types from '@/components/Money/Types.vue';
  import Numberpad from '@/components/Money/Numberpad.vue';
  import Notes from '@/components/Money/Notes.vue';

  export default {
    name: "money",
    components: {Notes, Numberpad, Types, Information, Amount},
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

