<template>
    <div class="amount-area">
        <span>人民币↓</span>
        <label>
            <input :value="dataMoney" @change="onValueChanged" placeholder="金额"/>
        </label>
    </div>
</template>

<script lang="ts">

  import Vue from 'vue';
  import {Component, Prop} from "vue-property-decorator";
  @Component
  export default class Amount extends Vue {
    @Prop(String) dataMoney: string | undefined ;
    onValueChanged(event: { target: HTMLInputElement}) {
      this.$emit('update:data-money',event.target.value);
    }
  }
</script>

<style lang="scss" scoped>
    @import "~@/assets/styles/global.scss";
    .amount-area {
        @extend %outerShadow;
        display: flex;
        max-height: 70px;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: $blue;
        padding: 22px 0 22px 0;
        color: $white;

        span {
            background: transparent;
            padding-right: 20px;
            color: inherit;
        }

        input {
            background: transparent;
            border-bottom: 2px solid $white-rgba;
            border-top: none;
            border-left: none;
            border-right: none;
            padding: 0 10vw 0 5px;
            color: inherit;
            caret-color: $white;

            &::placeholder {
                color: $white;
            }

            &:focus {
                border-bottom: 2px solid $white;

            }

        }
    }

</style>