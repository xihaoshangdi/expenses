<template>
    <div>
        <Icon name="labels" class-prefix="information"></Icon>
        <ul class="tagList">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    </div>
</template>

<script lang="ts">
  export default {
    name: "Tags"
  };
</script>

<style lang="scss" scoped>
    @import "~@/assets/styles/global.scss";
    .tagList {
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
</style>