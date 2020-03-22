<template>
    <Layout>
        编辑标签
    </Layout>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component} from "vue-property-decorator";
  import labelBar from "@/models/labelModel";

  @Component
  export default class EditLabel extends Vue {
    label={};

    created(): void {

      const id = this.$route.params.id;
      labelBar.extract();
      console.log(labelBar.labelsList);
      this.label = labelBar.labelsList.filter(item => item.id === id)[0];
      if (this.label){
        console.log(this.label);
      }else{
        this.$router.replace('/404');
      }

    }
  }
</script>

<style lang="scss" scoped>

</style>