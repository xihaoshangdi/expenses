<template>
    <Layout class-prefix="layout">
        {{this.record}}
        <Amount :data-money.sync="record.amount"/>
        <Headline
                :data-title.sync="record.headline"
                tabindex="-1"
                @click.native="padShowUpdate(false)"
                @focusout.native="padShowUpdate(true)"
        />
        <Tags :data-tags.sync="record.tags"/>
        <Calendar :data-date.sync="record.date"></Calendar>
        <Notes
                field-name="备注："
                placeholder="在这里输入备注"
                @update:value="onUpdateNotes"
                @click.native="padShowUpdate(false)"
                @focusout.native="padShowUpdate(true)"
        />
        <transition name="fade">
            <Types v-show="padShow" :data-type.sync="record.type"/>
        </transition>
        <transition name="fade">
            <Numberpad v-show="padShow" @update:save="onRecordSave" @update:value="onPadsUpdate"/>
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
  import Vue from "vue";
  import {Component} from "vue-property-decorator";
  import Calendar from '@/components/Money/Calendar.vue';
  import model from "@/models/model";

  @Component({
    components: {
      Calendar,
      Amount, Types, Numberpad, Notes, Headline, Tags
    }
  })
  export default class Money extends Vue {
    records=model.extract();
    timer: number | undefined;
    record: RecordBar = {
      amount: "",
      headline: "",
      tags: [],
      date: new Date().toLocaleDateString(),
      notes: "",
      type: "-",
    };
    padShow = true;

    onUpdateNotes(value: string){
      this.record.notes=value;
    }

    padShowUpdate(value: boolean) {
      const keyControl=document.activeElement as HTMLElement;
      keyControl.blur();
      if (this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.padShow = value;
        keyControl.focus();
      }, 200);

    }

    onPadsUpdate(value: string) {
      this.record.amount = value;
    }

    onRecordSave() {
      this.records.push(model.clone(this.record));
      model.save(this.records);
      alert('记账成功');
      location.reload();
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
        transition: all 0.5s;
    }

    .fade-enter {
        opacity: 0;
        height: 0;
    }

    .fade-leave-to {
        opacity: 1;
    }
</style>

