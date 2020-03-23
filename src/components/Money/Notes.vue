<template>
    <div class="note">
        <label class="notes">
            <span class="name">备注</span>
            <input type="text"
                   :value="dataNotes"
                   @change="onValueChanged"
                   placeholder="在这里输入备注">
        </label>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component,Prop} from 'vue-property-decorator';
  @Component
  export default class Notes extends Vue {
    @Prop(String) readonly dataNotes: string | undefined;
    onValueChanged(event: { target: HTMLInputElement }) {
      this.$emit("update:data-notes", event.target.value);
    }
  }
</script>

<style lang="scss" scoped>
    @import "~@/assets/styles/global.scss";
    .note{
        border: $t;
        flex-grow: 1;
        background-color:#f5f5f5;
    }
    .notes {
        font-size: 14px;
        background: #f5f5f5;
        padding-left: 16px;
        display: flex;
        align-items: center;
        .name {
            padding-right: 16px;
        }
        input {
            height: 64px;
            flex-grow: 1;
            background: transparent;
            border: none;
            padding-right: 16px;
        }
    }
</style>