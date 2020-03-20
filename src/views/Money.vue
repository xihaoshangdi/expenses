<template>
    <Layout class-prefix="layout">
        <Amount :data-money.sync="money"/>
        <Headline @update:value="onTitleUpdate"/>
        <Tags :data-source.sync="labels" @update:value="onTagUpdate"/>
        <Date/>
        <Notes @update:value="onNotesUpdate"/>
        <Types @update:value="onTypeUpdate"/>
        <Numberpad @update:value="onPadsUpdate"/>
    </Layout>
</template>

<script lang="ts">

  import Amount from "@/components/Money/Amount.vue";
  import Types from "@/components/Money/Types.vue";
  import Numberpad from "@/components/Money/Numberpad.vue";
  import Notes from "@/components/Money/Notes.vue";
  import Headline from "@/components/Money/Headline.vue";
  import Tags from "@/components/Money/Tags.vue";
  import Date from "@/components/Money/Date.vue";

  import Vue from "vue";
  import {Component, Watch} from "vue-property-decorator";

  @Component({
    components: {
      Amount, Types, Numberpad, Notes, Headline, Tags, Date
    }
  })
  export default class Money extends Vue {
    money = "";
    labels = ["1", "2", "3", "4"];
    selectedLabels: string[] = [];

    //
    @Watch("money", {immediate: true})
    onValueChanged() {
      console.log("money:       " + this.money);
    }

    onTagUpdate(value: string[]) {
      this.selectedLabels = value;
      console.log(this.selectedLabels.toString());
    }

    onNotesUpdate(value: string) {
      console.log(value);
    }

    onTypeUpdate(value: string) {
      console.log(value);
    }

    onTitleUpdate(value: string) {
      console.log(value);
    }

    onPadsUpdate(value: string) {
      this.money=value;
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

