<template>
    <Layout>
        <div class="navBar">
            <span class="leftIcon">
                <Icon class-prefix="editlabel" name="left"/>
            </span>
            <span class="title">编辑标签</span>
            <span class="rightIcon"></span>
        </div>
        <div class="form-wrapper">
            <Notes
                    @keypress="searchGoods"
                    :field-name="label.name"
                    placeholder="待更新的标签名"
                    @update:value="onUpdateLabel"
            />
        </div>

        <div class="button-wrapper">
            <Button>编辑标签</Button>
        </div>
    </Layout>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component} from "vue-property-decorator";
  import labelBar from "@/models/labelModel";
  import Notes from "@/components/Money/Notes.vue";
  import Button from "@/components/Button.vue";

  @Component({
    components: {Button, Notes}
  })
  export default class EditLabel extends Vue {
    label = {};

    created(): void {
      const id = this.$route.params.id;
      labelBar.extract();
      this.label = labelBar.labelsList.filter(item => item.id === id)[0];
      if (!this.label) {
        this.$router.replace("/404");
      }
    }
    onUpdateLabel(value: string) {
      console.log(value);
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