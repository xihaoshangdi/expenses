<template>
    <Layout>
        <Hurdle
                title="Express"
                icon="filter"
        />
        <div class="recent-box">
            <Tabs
                    :tabs="recordTypeList"
                    :value.sync="type"
            ></Tabs>
            <Tabs :tabs="intervalList"
                  :value.sync="interval"
                  class-prefix="statistic-type"
                  v-if="groupList.length>0"
            ></Tabs>
            <div v-if="groupList.length>0" class="record-bar">
                <div>￥{{this.groupList[0].total||0}}</div>
            </div>
        </div>
        <div class="container-box">
            <ol v-if="groupList.length>0">
                <li
                        v-for="(item,index) of groupList"
                        :key="index"
                >
                    <h3 class="title">{{timeFormat(item.title)}}<span class="money">￥{{item.total||0}}</span></h3>
                    <div class="record-box">
                        <ol>
                            <li v-for="(i,index) of item.recordList"
                                :key="index"
                                class="record"
                            >
                                <span>{{labelString(i.tags)}}</span>
                                <span class="headline">{{i.headline}}</span>
                                <span class="money">{{i.amount||0}} CNY</span>
                            </li>
                        </ol>
                    </div>
                </li>
            </ol>
            <div v-else class="error-img">
                <div> 目前不存在{{recordType}}的相关纪录,请先输入点数据</div>
                <img src="../assets/image/error.jpg" alt="错误">
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
  import Hurdle from "@/components/Hurdle.vue";
  type Census = {
    title: string;
    total: number;
    recordList: RecordBar[];
  }[];
  type Interval = {
    type: "week" | "day" | "month";
  }
  @Component({
    components: {Hurdle, Tabs},
  })

  export default class Statistics extends Vue {
    type = "-";
    interval = "day";
    intervalList = intervalList;
    recordTypeList = recordTypeList;

    get recordType(){
      return recordTypeList.filter(item=>item.value===this.type)[0].text;
    }

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
        return dayjs(date).format("M月D日");
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
        if (today.isSame(date, "year")) {
          return dayjs(start).format("M月D日") + "---" + dayjs(end).format("M月D日");
        } else {
          return dayjs(start).format("YY年M月D日") + "---" + dayjs(end).format("YY年M月D日");
        }
      }
    }

    FormMonth(date: string) {
      const today = dayjs();
      if (today.isSame(date, "month")) {
        return "本月";
      } else {
        const start = dayjs(date).startOf("month");
        if (today.isSame(date, "year")) {
          return dayjs(start).format("M月");
        } else {
          return dayjs(start).format("YY年M月");
        }
      }
    }

    get groupList() {
      const dataList: RecordBar[] = Clone(this.$store.state.recordData)
        .filter((item: RecordBar) => item.type === this.type);
      if (dataList.length === 0) {
        return []
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

    .recent-box {
        max-height: 30vh;
        background-color: #4388e9;
        font-size: 20px;
        color: #ecfbfc;

        > .statistic-type-tabs ::v-deep li {
            padding: 2px 0;
        }
        > .record-bar {
            font-size: 56px;
            display: flex;
            justify-content: center;
        }
        @extend %innerShadow;
    }

    %item {
        padding: 8px 16px;
        line-height: 24px;
        display: flex;
        justify-content: space-between;
        align-content: center;
        word-break: break-all;
    }
    .container-box{
        .title {
            @extend %item;
            background-color: #EEF3F8;
        }
        .record {
            @extend %item;
        }
        .headline {
            margin-right: auto;
            margin-left: 16px;
            color: #999;
        }
    }
    .money{
        font-family: $font-hei;
        font-weight: bolder;
        color: #45A1FF;
    }

    .error-img{
        display: flex;
        flex-direction: column;
        align-items: center;
        > img{
            max-height: 50vw;
            max-width: 50vw;
            border-radius: 50%;
        }
        > div{
            padding: 30px;
        }
    }








</style>