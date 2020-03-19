<template>
    <div class="message-area">
        <Title/>
        <Tags :data-source.sync="TagsData"/>
        <Date/>
    </div>
</template>

<script lang="ts">
  import Date from '@/components/Money/Information/Date.vue';
  import Tags from '@/components/Money/Information/Tags.vue';
  import Title from '@/components/Money/Information/Title.vue';
  export default {
    name: "Information",
    components: {Title, Tags, Date},
    data(){
      return{
        TagsData:['1','2','3','4','5']
      }
    }
  };
</script>

<style lang="scss" scoped>

</style>