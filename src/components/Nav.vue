<template>
    <div>
        <router-link to="/money">
            <svg>
                <use xlink:href="#money"/>
            </svg>
            money
        </router-link>
        |
        <router-link to="/labels">
            <svg>
                <use xlink:href="#labels"/>
            </svg>
            labels
        </router-link>
        |
        <router-link to="/statistics">
            <svg>
                <use xlink:href="#statistics"/>
            </svg>
            statistics
        </router-link>
        |
    </div>
</template>

<script lang="ts">
  const requireAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().map(requireContext);
  try {
    requireAll(require.context("../assets/icons", false, /\.svg$/));
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