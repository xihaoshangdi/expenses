<template>
    <div class="buttons">
        <button @click="inputContent">1</button>
        <button @click="inputContent">2</button>
        <button @click="inputContent">3</button>
        <button @click="remove">删除</button>
        <button @click="inputContent">4</button>
        <button @click="inputContent">5</button>
        <button @click="inputContent">6</button>
        <button @click="clear">清空</button>
        <button @click="inputContent">7</button>
        <button @click="inputContent">8</button>
        <button @click="inputContent">9</button>
        <button @click="ok" class="ok">OK</button>
        <button @click="inputContent" class="zero">0</button>
        <button @click="inputContent">.</button>
    </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component,Watch} from "vue-property-decorator";

  @Component
  export default class Amount extends Vue {
    output = "0";
    @Watch('output', { immediate: false})
    onValueChanged(val: string) {
      this.$emit('update:value',val)
    }

    inputContent(event: { target: HTMLButtonElement }) {
      const value = event.target.textContent;
      if (value && this.output.length <= 16) {
        if (this.output === "0" && "0123456789".indexOf(value) >= 0) {
          this.output = value;
          return;
        }
        if (this.output.indexOf(".") >= 0 && value === ".") {return;}
        this.output += value;
      }
    }

    remove() {
      if (this.output.length === 1) {
        this.output = '';
      } else {
        this.output = this.output.slice(0, -1);
      }
    }
    clear() {
      this.output = '';
    }

    ok() {
      this.$emit('update:save');
      this.output = '';
    }
  }
</script>

<style lang="scss" scoped>
    @import "~@/assets/styles/global.scss";

    .buttons {
        @extend %clearFix;

        > button {
            width: 25%;
            height: 64px;
            float: left;
            background: transparent;
            border: none;

            &.ok {
                height: 64*2px;
                float: right;
            }

            &.zero {
                width: 25*2%;
            }

            $bg: #f2f2f2;

            &:nth-child(1) {
                background: $bg;
            }

            &:nth-child(2), &:nth-child(5) {
                background: darken($bg, 4%);
            }

            &:nth-child(3), &:nth-child(6), &:nth-child(9) {
                background: darken($bg, 4*2%);
            }

            &:nth-child(4), &:nth-child(7), &:nth-child(10) {
                background: darken($bg, 4*3%);
            }

            &:nth-child(8), &:nth-child(11), &:nth-child(13) {
                background: darken($bg, 4*4%);
            }

            &:nth-child(14) {
                background: darken($bg, 4*5%);
            }

            &:nth-child(12) {
                background: darken($bg, 4*6%);
            }
        }
    }

</style>