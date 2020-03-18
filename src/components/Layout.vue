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
        height: 100vh;
    }
    .nav-content{

        flex-grow: 1;
    }
</style>