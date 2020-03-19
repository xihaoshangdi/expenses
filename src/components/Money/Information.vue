<template>
    <div class="message-area">
        <Title/>
        <Tags/>
        <Date/>
    </div>
</template>

<script lang="ts">
  import Date from '@/components/Money/Information/Date.vue';
  import Tags from '@/components/Money/Information/Tags.vue';
  import Title from '@/components/Money/Information/Title.vue';
  export default {
    name: "Information",
    components: {Title, Tags, Date}
  };
</script>

<style lang="scss" scoped>
    @import "~@/assets/styles/global.scss";
    .message-area {
        display: flex;
        flex-direction: column;
        > div {
            padding: 20px 10vw 20px 10vw;
            position: relative;
            display: flex;
            align-items: center;
            width: 100vw;
        }



    }
</style>