<template>
    <Layout>
        <div class="navBar">
            <span class="leftIcon" @click="goBack">
                <Icon class-prefix="editlabel" name="left"/>
            </span>
            <span class="title">编辑标签</span>
            <span class="rightIcon"></span>
        </div>
        <div class="form-wrapper">
            <Notes
                    field-name="标签名"
                    :placeholder="label.name"
                    @update:value="onUpdateLabel"
            />
        </div>

        <div class="button-wrapper" @click="remove">
            <Button>删除标签</Button>
        </div>
    </Layout>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component} from "vue-property-decorator";
  import Notes from "@/components/Money/Notes.vue";
  import Button from "@/components/Button.vue";

  @Component({
    components: {Button, Notes}
  })
  export default class EditLabel extends Vue {
    get label(){
      return this.$store.state.currentLabel;
    }
    created(): void {
      const id = this.$route.params.id;
      this.$store.commit('extractLabel');
      this.$store.commit('findCurrentLabel',id);
      if (!this.$store.state.currentLabel) {
        this.$router.replace("/404");
      }
    }
    onUpdateLabel(value: string) {
      if (this.label!==undefined){
        this.$store.commit('updateLabel',value);
      }
    }
    remove(){
      if (this.label!==undefined){
        this.$store.commit('removeLabel');
        this.$router.back();
      }
    }
    goBack(){
      this.$router.back();
    }
  }
</script>

<style lang="scss" scoped>
    @import "~@/assets/styles/global.scss";

    .navBar {
        @extend %navBar;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        text-align: center;
        padding: 23px 0;
        > .title {
            height: 18px;
        }

        > .leftIcon {
            width: 24px;
            height: 24px;
            margin-left: 15px;
        }

        > .rightIcon {
            width: 24px;
            height: 24px;
        }
    }

    .form-wrapper {
        background: white;
        margin-top: 8px;
    }

    .button-wrapper {
        text-align: center;
        padding: 16px;
        margin-top: 44-16px;
    }
</style>