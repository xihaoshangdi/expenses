<template>
    <Layout class-prefix="layout">
        {{padShow}}
        <Amount :data-money.sync="record.amount"/>
        <Headline
                :data-title.sync="record.headline"
                @pad-show="padShowUpdate"
        />
        <Tags :data-source.sync="labels" :data-tags.sync="record.tags"/>
        <Date/>
        <Notes :data-notes.sync="record.notes" @pad-show="padShowUpdate"/>
        <transition name="fade">
            <Types v-if="padShow" :data-type.sync="record.type"/>
        </transition>
        <transition name="fade">
            <Numberpad v-if="padShow" @update:save="onRecordSave" @update:value="onPadsUpdate"/>
        </transition>
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
  import {Component} from "vue-property-decorator";

  type Record = {
    amount: string;
    headline: string;
    tags: string[];
    date: string;
    notes: string;
    type: string;
  }
  @Component({
    components: {
      Amount, Types, Numberpad, Notes, Headline, Tags, Date
    }
  })
  export default class Money extends Vue {
    records: Record[] = JSON.parse(localStorage.getItem("records") || "[]");
    labels = ["1", "2", "3", "4"];
    padShow = true;
    timer: number | undefined;
    record: Record = {
      amount: "",
      headline: "",
      tags: [],
      date: "",
      notes: "",
      type: "-",

    };

    padShowUpdate(value: boolean) {
        if(this.timer) clearTimeout(this.timer);
        this.timer=setTimeout(()=>{
          this.padShow=value;
        },0);
    }

    onPadsUpdate(value: string) {
      this.record.amount = value;
    }

    onRecordSave() {
      this.records.push(JSON.parse(JSON.stringify(this.record)));
      window.localStorage.setItem("recordList", JSON.stringify(this.records));
      console.log(this.records);
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

    .fade-enter-active {
        transition: all 3.5s;
    }

    .fade-enter {
        opacity: 0;
        height: 0;
    }

    .fade-leave-to {
        opacity: 1;
    }
</style>

