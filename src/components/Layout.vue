<template>
    <div class="nav-box">
        <div class="nav-content">
            <slot></slot>
        </div>
        <Nav></Nav>
    </div>
</template>

<script lang="ts">
  import Nav from '@/components/Nav.vue';
  export default {
    name: "Layout",
    components: {Nav}
  };
</script>

<style lang="scss" scoped>
    .nav-box{
        display: flex;
        flex-direction: column;
        border: 1px solid red;
        height: 100vh;
    }
    .nav-content{
        border: 1px solid red;
        flex-grow: 1;
    }
</style>