<template>
    <div class="note">
        <label class="notes">
            <span class="name">{{this.fieldName}}</span>
            <input type="text"
                   v-model="value"
                   :placeholder="this.placeholder">
        </label>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component,Prop,Watch} from 'vue-property-decorator';
  @Component
  export default class Notes extends Vue {
    value='';
    @Prop(String) readonly fieldName: string | undefined;
    @Prop() placeholder?: string;
    @Watch('value')
    onNotesChange(){
      this.$emit('update:value',this.value);
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