<template>
    <svg class="icon" :class="classPrefix && `${classPrefix}-icon`">
        <use :xlink:href="'#'+name"/>
    </svg>
</template>

<script lang="ts">
  export default {
    name: "Icon",
    props:['name','classPrefix']
  };
</script>

<style lang="scss" scoped>
    .icon{
        width: 1em; height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }

    .information-icon {
        width: 1.5em;
        height: 1.5em;
        position: absolute;
        left: 10px;
    }
    .nav-icon{
        width: 21px;
        height: 21px;
    }
    .labels-icon{
        width: 45px;
        height: 45px;
    }
    .editlabel-icon {
        width: 100%;
        height: 100%;
    }

</style>