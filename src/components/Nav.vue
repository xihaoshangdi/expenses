<template>
    <div>
        <router-link to="/money">
           <Icon name="money" />
            money
        </router-link>
        |
        <router-link to="/labels">
            <Icon name="labels" />
            labels
        </router-link>
        |
        <router-link to="/statistics">
            <Icon name="statistics" />
            statistics
        </router-link>
        |
    </div>
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

</style>