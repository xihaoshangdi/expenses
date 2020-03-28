<template>
    <nav>
        <router-link to="/money" class="item" active-class="selected">
           <Icon name="money" class-prefix="nav" />
            money
        </router-link>
        <router-link to="/labels" class="item" active-class="selected">
            <Icon name="labels" class-prefix="nav" />
            labels
        </router-link>
        <router-link to="/statistics" class="item" active-class="selected">
            <Icon name="statistics" class-prefix="nav" />
            statistics
        </router-link>
    </nav>
</template>

<script lang="ts">
  const requireAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
  try {
    requireAll(require.context("@/assets/icons", false, /\.svg$/));
  } catch (e) {
    console.log(e);
  }
  export default {
    name: "Nav",
    data() {
      return {};
    }
  };
</script>

<style lang="scss" scoped>
    @import "~@/assets/styles/global";
    nav{
        @extend %outerShadow;
        background-color: $nav-bg;
        color: $nav-color;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        font-size: 14px;
        max-height: 56px;
        > .item{
            flex-grow:1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 4px 0 4px 0  ;
        }
        > .item.selected{
          color: $nav-icon-selected;
        }
    }

</style>