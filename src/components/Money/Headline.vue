<template>
    <div class="box">
        <Icon name="title" class-prefix="information"></Icon>
        <label>
            <input
                    :value="dataTitle"
                    placeholder="标题"
                    @input="onTitleChange"
            />
        </label>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from "vue-property-decorator";
  @Component
  export default class Headline extends Vue {
    @Prop(String) readonly dataTitle: string | undefined;
    onTitleChange(event: { target: HTMLInputElement}){
        this.$emit('update:data-title',event.target.value);
    }


  }
</script>

<style lang="scss" scoped>
    @import "~@/assets/styles/global.scss";
    ::v-deep .information-icon {
        width: 1.5em;
        height: 1.5em;
        position: absolute;
        left: 40px;
    }

    .box {
        @extend %informationBox;
    }

    label {
        font-size: 18px;
        > input {
            background: transparent;
            border-bottom: 1px solid #323232;
            border-top: none;
            border-left: none;
            border-right: none;
            padding-left: 5px;
            color: inherit;
            &::placeholder {
                font-size: inherit;
                color: #999999;
            }
        }
        &:focus-within {
            > input {
                border-bottom: 1px solid $color-highlight;
            }
        }
    }

</style>