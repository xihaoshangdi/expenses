<template>
    <div class="amount-area">
        <span>￥</span>
        <label>
            <input
                    :value="dataMoney"
                    readonly
                    placeholder="金额"/>
        </label>
    </div>
</template>

<script lang="ts">

  import Vue from "vue";
  import {Component, Prop} from "vue-property-decorator";

  @Component
  export default class Amount extends Vue {
    @Prop({required:true}) readonly dataMoney: string | undefined;

  }
</script>

<style lang="scss" scoped>
    @import "~@/assets/styles/global.scss";

    .amount-area {
        display: flex;
        justify-content: center;
        background-color: #4388E9;
        padding: 15px 0;
        overflow: hidden;
        color: #e6e6e6;
        @extend %innerShadow;
        span {
            background: transparent;
            padding-right: 10px;
            color: inherit;
        }
        input {

            background: transparent;
            padding-left: 5px;
            padding-right: 30px;
            border-bottom: 2px solid rgba(255,255,255,0.8);
            border-top: none;
            border-left: none;
            border-right: none;
            color: inherit;
            caret-color: #ecfbfc;
            &::placeholder {
                color: #ecfbfc;
            }
            &:focus {
                border-bottom: 2px solid #ecfbfc;

            }

        }
    }

</style>