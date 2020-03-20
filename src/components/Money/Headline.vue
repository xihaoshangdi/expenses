<template>
    <div class="box">
        <Icon name="title" class-prefix="information"></Icon>
        <label>
            <input :value="dataTitle" @change="onValueChanged" placeholder="标题"/>
        </label>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from "vue-property-decorator";
  @Component
  export default class Headline extends Vue {
    @Prop(String) readonly dataTitle: string | undefined;

    onValueChanged(event: { target: HTMLInputElement }) {
      this.$emit('update:data-title', event.target.value);
    }
  }
  //   title='';
  //   @Watch('title', { immediate: false})
  //   onValueChanged(val: string[]) {
  //     this.$emit('update:value',val)
  //   }
  // }
</script>

<style lang="scss" scoped>
    @import "~@/assets/styles/global.scss";

    .box {
        @extend %informationBox
    }

    label {
        margin-left: 15px;
        font-size: 20px;

        > input {
            width: 80vw;
            background: transparent;
            border-bottom: 1px solid $gray;
            border-top: none;
            border-left: none;
            border-right: none;
            padding: 0 5px 0 5px;
            color: inherit;
            caret-color: $gray;

            &::placeholder {
                color: $gray;
            }
        }

        &:focus-within {
            > input {
                border-bottom: 1px solid $color-highlight;
            }
        }
    }

</style>