import Vue from 'vue'
import Vuex from 'vuex'
import Clone from '@/lib/Clone';

Vue.use(Vuex);
const localeRecordKey = 'recordBar';
type RootState={
  RecordData: RecordBar[];
}
const store = new Vuex.Store({
  state: {
    RecordData:[]
  } as RootState,
  mutations: {
    extractRecord(state) {
      state.RecordData=JSON.parse(window.localStorage.getItem(localeRecordKey) || '[]');
      console.log(state.RecordData);
    },
    saveRecord(state) {
      window.localStorage.setItem(localeRecordKey, JSON.stringify(state.RecordData));
    },
    addRecord(state,record: RecordBar){
      state.RecordData.push(Clone(record));
      store.commit('saveRecord');
    },
  }
});

export default store;
