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
  import store from "@/store/models";

  @Component({
    components: {Button, Notes}
  })
  export default class EditLabel extends Vue {
    label?: { id: string ; name: string } = undefined;
    created(): void {
      const id = this.$route.params.id;
      this.label = store.findLabel(id);
      if (!this.label) {
        this.$router.replace("/404");
      }
    }
    onUpdateLabel(value: string) {
      if (this.label!==undefined){
        const result=store.updateLabel(this.label.id,value);
        if(!result.status){
          alert(result.message)
        }
      }


    }
    remove(){
      if(this.label&&this.label.id){
        store.removeLabel(this.label.id);
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