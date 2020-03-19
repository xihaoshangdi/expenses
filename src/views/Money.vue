<template>
    <Layout class-prefix="layout">
        <div class="amount-area">
            <span>人民币↓</span>
            <label>
                <input name="amount" placeholder="金额"/>
            </label>
        </div>
        <div class="message-area">
            <div class="title">
                <Icon name="title" class="icon" ></Icon>
                <label>
                    <input placeholder="标题" />
                </label>
            </div>
            <div>
                <Icon name="labels"></Icon>
                <ul class="tagList">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ul>
            </div>
            <div>
                <Icon name="date"></Icon>
                <div class="date">日期组件</div>
            </div>
            <div class="textarea">
<!--                <label>-->
<!--                    <textarea></textarea>-->
<!--                </label>-->
            </div>
        </div>
        <div class="buttons-area">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>删除</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>清空</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button class="ok">OK</button>
            <button class="zero">0</button>
            <button>.</button>
        </div>
    </Layout>
</template>

<script lang="ts">

  export default {
    name: "money",
  };
</script>

<style lang="scss">
    @import "~@/assets/styles/global.scss";
    //全局样式 通过前缀layout生效
    .layout-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

    }
</style>

<style lang="scss" scoped>
    @import "~@/assets/styles/global.scss";
    // money 页顶部
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

    // money 页中部
    .message-area {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 0 0 10px 0;
        > div {
            padding: 20px 10vw 20px  10vw;
            position: relative;
            display: flex;
            align-items: center;
            width: 100vw;
        }
        .icon{
            width: 1.5em;
            height: 1.5em;
            position: absolute;
            left: 10px;
        }
        .title{
            margin-top: 10px;
            > label{

                margin-left: 15px;
                font-size: 20px;
                > input{
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
                        color:$gray;

                    }
                }
                &:focus-within {
                    > input{
                        border-bottom: 1px solid $color-highlight;
                    }
                }
            }
        }
        .tagList{
            width: 80vw;
            margin-left: 15px;
            display: flex;
            flex-direction: row;
            > li {
                background: $rgba;
                $h: 24px;
                height: $h;
                line-height: $h;
                border-radius: $h/2;
                padding: 0 10px;
                margin-right: 10px;
            }
        }
        .date{
            width: 80vw;
            margin-left: 15px;
            display: flex;
            flex-direction: row;
        }
        .textarea{
            flex-grow: 1;
            background-color: blue;
        }
    }
    //
    .buttons-area {
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