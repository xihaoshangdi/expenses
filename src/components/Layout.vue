<template>
    <div class="nav-box">
        <div class="nav-content" :class="classPrefix && `${classPrefix}-content`">
            <slot></slot>
        </div>
        <Nav/>
    </div>
</template>


<script lang="ts">
  import Nav from '@/components/Nav.vue';
  export default {
    name: "Layout",
    components: {Nav},
    props: ["classPrefix"],
  };
</script>



<style lang="scss" scoped>
    @import "~@/assets/styles/global.scss";
    .nav-box {
        display: flex;
        flex-direction: column;
        height: 100vh;

    }
    .nav-content {
        flex-grow: 1;
    }
</style>