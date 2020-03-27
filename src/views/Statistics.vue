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
            <ol v-if="groupList.length>0">
                <li
                        v-for="(item,index) of groupList"
                        :key="index"
                >
                    <h3 class="title">{{timeFormat(item.title)}}<span>￥{{item.total||0}}</span></h3>
                    <div class="record-box">
                        <ol>
                            <li v-for="(i,index) of item.recordList"
                                :key="index"
                                class="record"
                            >
                                <span>{{labelString(i.tags)}}</span>
                                <span class="headline">{{i.headline}}</span>
                                <span>￥{{i.amount||0}}</span>
                            </li>
                        </ol>
                    </div>
                </li>
            </ol>
            <div v-else>
                目前不存在相关纪录
            </div>
        </div>
    </Layout>
</template>


<script lang="ts">
  import Vue from "vue";
  import {Component} from "vue-property-decorator";
  import Tabs from "@/components/Tabs.vue";
  import intervalList from "@/constants/intervalList";
  import recordTypeList from "@/constants/recordTypeList";
  import dayjs from "dayjs";
  import Clone from "@/lib/Clone";

  type Census = {
    title: string;
    total: number;
    recordList: RecordBar[];
  }[];
  type Interval = {
    type: 'week' | 'day' | 'month';
  }
  @Component({
    components: {Tabs},
  })

  export default class Statistics extends Vue {
    type = "-";
    interval = "day";
    intervalList = intervalList;
    recordTypeList = recordTypeList;

    get region() {
      return {type: this.interval} as Interval;
    }


    labelString(tags: string[]) {
      return tags.length === 0 ? "无" : tags.join(",");
    }

    timeFormat(value: string) {
      const date = value.split("T")[0];
      let result: string | undefined = undefined;
      switch (this.interval) {
        case "day":
          result = this.FormDay(date);
          break;
        case "week":
          result = this.FormWeek(date);
          break;
        case "month":
          result = this.FormMonth(date);
      }
      return result;
    }

    FormDay(date: string) {
      const today = dayjs();
      if (today.isSame(date, "day")) {
        return "今天";
      } else if (today.subtract(1, "day").isSame(date, "day")) {
        return "昨天";
      } else if (today.subtract(2, "day").isSame(date, "day")) {
        return "前天";
      } else if (today.isSame(date, "year")) {
        return dayjs(date).format("M月D日"); // '25/01/2019'
      } else {
        return dayjs(date).format("YY年M月D日");
      }

    }

    FormWeek(date: string) {
      const today = dayjs();
      if (today.isSame(date, "week")) {
        return "本周";
      } else {
        const start = dayjs(date).startOf("week");
        const end = dayjs(date).endOf("week");
        if (today.isSame(date, "year")){
          return dayjs(start).format("M月D日")+'---'+dayjs(end).format("M月D日");
        }else{
          return dayjs(start).format("YY年M月D日")+'---'+dayjs(end).format("YY年M月D日");
        }
      }
    }

    FormMonth(date: string) {
      const today = dayjs();
      if (today.isSame(date, "month")) {
        return "本月";
      } else {
        const start = dayjs(date).startOf("month");
        if (today.isSame(date, "year")){
          return dayjs(start).format("M月")
        }else{
          return dayjs(start).format("YY年M月")
        }
      }
    }

    get groupList() {
      const dataList: RecordBar[] = Clone(this.$store.state.recordData)
        .filter((item: RecordBar) => item.type === this.type);
      if (dataList.length===0){
        //TODO
        return [];
      }
      dataList.sort((a, b) => {
        return dayjs(b.date).valueOf() - dayjs(a.date).valueOf();
      });
      const result: Census = [{
        title: dataList[0].date,
        total: parseFloat(dataList[0].amount),
        recordList: [dataList[0]]
      }];

      for (let i = 1; i < dataList.length; i++) {
        const current = dataList[i];
        const last = result[result.length - 1];
        if (dayjs(current.date).isSame(last.title, this.region.type)) {
          last.total += parseFloat(current.amount);
          last.recordList.push(current);
        } else {
          result.push({title: current.date, total: parseFloat(current.amount), recordList: [current]});
        }
      }
      return result;
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
        background-color: cornflowerblue;
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