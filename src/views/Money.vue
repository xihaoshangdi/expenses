<template>
    <Layout classPrefix="money">
        <Hurdle title="SAVE"/>
        <Amount :data-money="record.amount"/>
        <Headline
                :data-title.sync="record.headline"
        />
        <Tags :data-tags.sync="record.tags"/>
        <Calendar :data-date.sync="record.date"></Calendar>
        <Notes
                field-name="备注："
                placeholder="在这里输入备注"
                @update:value="onUpdateNotes"
        />
        <Tabs :tabs="recordTypeList"
              :value.sync="record.type"
              class-prefix="money"
        ></Tabs>
        <Numberpad @update:save="onRecordSave" @update:value="onPadsUpdate"/>

    </Layout>
</template>

<script lang="ts">
  import Amount from "@/components/Money/Amount.vue";
  import Numberpad from "@/components/Money/Numberpad.vue";
  import Notes from "@/components/Money/Notes.vue";
  import Headline from "@/components/Money/Headline.vue";
  import Tags from "@/components/Money/Tags.vue";
  import Vue from "vue";
  import {Component} from "vue-property-decorator";
  import Calendar from "@/components/Money/Calendar.vue";
  import recordTypeList from "@/constants/recordTypeList";
  import Tabs from "@/components/Tabs.vue";
  import Hurdle from '@/components/Hurdle.vue';

  @Component({
    components: {
      Hurdle,
      Tabs,
      Calendar,
      Amount, Numberpad, Notes, Headline, Tags
    }
  })
  export default class Money extends Vue {
    random=Math.random();
    recordTypeList = recordTypeList;
    record: RecordBar = {
      amount: "",
      headline: "",
      tags: [],
      date: new Date().toISOString(),
      notes: "",
      type: "-",
    };
    created(): void {
      this.$store.commit("extractRecord");
    }

    onUpdateNotes(value: string) {
      this.record.notes = value;
    }

    onPadsUpdate(value: string) {
      this.record.amount = value;
    }

    onRecordSave() {
      if (this.record.tags.length === 0) {
        alert("至少选择有一个标签");

      } else {
        this.$store.commit("addRecord", this.record);
        alert("记账成功");
        location.reload();
      }

    }
  }
</script>

<style lang="scss" scoped>
    @import "~@/assets/styles/global.scss";

    ::v-deep .money-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    ::v-deep .money-tabs{
        @extend %innerShadow;
        > li.selected{
            background-color: rgba(0,0,0,0.1);
        }
    }
</style>

