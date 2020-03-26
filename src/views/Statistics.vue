<template>
    <Layout>
       <Tabs
               :tabs="recordTypeList"
               :value.sync="type"
               classPrefix="statistic-nav"
       ></Tabs>
        <Tabs :tabs="intervalList"
              :value.sync="interval"
        ></Tabs>
        {{type}}
        {{interval}}
    </Layout>
</template>



<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Tabs from '@/components/Tabs.vue';
  import intervalList from '@/constants/intervalList';
  import recordTypeList from '@/constants/recordTypeList';
  @Component({
    components: {Tabs},
  })
  export default class Statistics extends Vue {
    type = '-';
    interval = 'day';
    intervalList = intervalList;
    recordTypeList = recordTypeList;
  }
</script>

<style scoped lang="scss">
    @import "~@/assets/styles/global.scss";
    .statistic-nav-tabs{
        @extend %navBar;
    }
    /* eslint-disable */
    /*::v-deep .type-tabs-item {*/
    /*    background: white;*/
    /*    &.selected {*/
    /*        background: #C4C4C4;*/
    /*        &::after {*/
    /*            display: none;*/
    /*        }*/
    /*    }*/
    /*}*/
    /*::v-deep .interval-tabs-item {*/
    /*    height: 48px;*/
    /*}*/
</style>