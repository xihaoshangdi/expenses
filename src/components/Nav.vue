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
    nav{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        box-shadow: 0 0 3px rgba(0,0,0,0.25);
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
          color: #FF0000;
        }
    }

</style>