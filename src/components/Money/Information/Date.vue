<template>
    <div>
        <Icon name="date" class-prefix="information"></Icon>
        <div class="date">日期组件</div>
    </div>
</template>

<script lang="ts">
  export default {
    name: "Date"
  };
</script>

<style lang="scss" scoped>
    @import "~@/assets/styles/global.scss";
    .date {
        width: 80vw;
        margin-left: 15px;
        display: flex;
        flex-direction: row;
    }

</style>