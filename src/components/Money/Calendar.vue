<template>
    <div class="box">
        <Icon name="date" class-prefix="information"></Icon>
        <div class="date" @click="showCal">
            {{dataDate}}
        </div>
        <vue-hash-calendar
                :visible.sync="Cal.visible"
                :model="Cal.model"
                :markDate="Cal.markDate"
                :markType="Cal.markType"
                @confirm="onDateChange"

        ></vue-hash-calendar>
    </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component, Prop} from "vue-property-decorator";

  type Cal = {
    visible: boolean;
    model: string;
    markDate: object[];
    markType: string;
  }
  @Component
  export default class Calendar extends Vue {
    @Prop(String) readonly dataDate: string | undefined;
    Cal = {
      visible: false,
      model: "dialog",
      markDate: [],
      markType: "circle"
    };

    showCal() {
      this.Cal.visible = true;
    }

    onDateChange(value: Date) {
      this.$emit("update:data-date", value.toLocaleDateString());
    }
  }
</script>

<style lang="scss" scoped>
    @import "~@/assets/styles/global.scss";

    .box {
        @extend %informationBox
    }

    .date {
        width: 80vw;
        margin-left: 15px;
        display: flex;
        flex-direction: row;
    }

</style>