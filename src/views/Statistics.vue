<template>
    <Layout>
        <Tabs
                :tabs="recordTypeList"
                :value.sync="type"
                classPrefix="statistic-nav"
        ></Tabs>
        <Tabs :tabs="intervalList"
              :value.sync="interval"
              classPrefix="statistic-type"
        ></Tabs>
        <div class="container-box">
            <ol>
                <li
                        v-for="(item,index) of RecordList"
                        :key="index"
                >
                    <h3 class="title">{{timeFormat(item.title)}}</h3>
                    <div class="record-box">
                        <ol>
                            <li v-for="(i,index) of item.recordList"
                                :key="index"
                                class="record"
                            >
                                 <span>{{labelString(i.tags)}}</span>
                                <span class="headline">{{i.headline}}</span>
                                <span>￥{{i.amount}}</span>
                            </li>
                        </ol>
                    </div>
                </li>
            </ol>
        </div>

    </Layout>
</template>


<script lang="ts">
  import Vue from "vue";
  import {Component} from "vue-property-decorator";
  import Tabs from "@/components/Tabs.vue";
  import intervalList from "@/constants/intervalList";
  import recordTypeList from "@/constants/recordTypeList";
  import dayjs from 'dayjs';
  type Census = {
    [title: string]: CensusItem;
  }
  type CensusItem = {
    title: string;
    recordList: RecordBar[];
  }
  @Component({
    components: {Tabs},
  })

  export default class Statistics extends Vue {
    type = "-";
    interval = "day";
    intervalList = intervalList;
    recordTypeList = recordTypeList;

    labelString(tags: string[]){
      return  tags.length===0?'无':tags.join(',');
    }
    timeFormat(value: string){
      const  date=value.split('T')[0];
      const today=dayjs();
      if(today.isSame(date, 'day')){
        return '今天'
      }else if(today.subtract(1, 'day').isSame(date,'day')){
        return '昨天'
      }else if(today.subtract(2, 'day').isSame(date,'day')){
        return '前天'
      }else if(today.isSame(date,'year')){
        return dayjs(date).format('M月D日') // '25/01/2019'
      }else{
        return dayjs(date).format('YY年M月D日');
      }
    }

    get RecordList() {
      const data: RecordBar[] = this.$store.state.recordData;
      const daily = {} as Census;
      for (let i = 0; i < data.length; i++) {
        const item = data[i];
        const date = item.date;
        if (daily[date] === undefined) {
          daily[date] = {title: date, recordList: []};
        }
        daily[date].recordList.push(data[i]);

      }

      return daily;
    }

    beforeCreate(): void {
      this.$store.commit("extractRecord");
    }
  }
</script>

<style scoped lang="scss">
    @import "~@/assets/styles/global.scss";
    .statistic-nav-tabs {
        @extend %navBar;
    }
    .statistic-type-tabs ::v-deep li {
        padding: 5px 0;
        background-color: cornflowerblue ;
    }
    %item {
        padding: 8px 16px;
        line-height: 24px;
        display: flex;
        justify-content: space-between;
        align-content: center;
    }
    .title {
        @extend %item;
    }
    .record {
        background: white;
        @extend %item;
    }
    .headline {
        margin-right: auto;
        margin-left: 16px;
        color: #999;
        word-break: break-all;
    }
</style>