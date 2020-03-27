import Vue from 'vue'
import Vuex from 'vuex'
import Clone from '@/lib/Clone';
import createId from '@/lib/CreatId';

Vue.use(Vuex);
const localeRecordKey = 'recordBar';
const localeLabelKey = 'labelBar';
type RootState={
  recordData: RecordBar[];
  labelsList: Tag[];
  currentLabel: Tag|undefined;
}
const store = new Vuex.Store({
  state: {
    recordData:[],
    labelsList:[],
    currentLabel:undefined
  } as RootState,
  mutations: {
    extractRecord(state) {
      state.recordData=JSON.parse(window.localStorage.getItem(localeRecordKey) || '[]');
    },
    saveRecord(state) {
      window.localStorage.setItem(localeRecordKey, JSON.stringify(state.recordData));
    },
    addRecord(state,record: RecordBar){
      state.recordData.push(Clone(record));
      store.commit('saveRecord');
    },
    extractLabel(state) {
      const defaultTags=[{id:'衣',name:'衣'},{id:'食',name:'食'},{id:'住',name:'住'},{id:'行',name:'行'}];
      const labelStr=window.localStorage.getItem(localeLabelKey);
      if(labelStr!==null){
        state.labelsList=JSON.parse(labelStr);
      }else{
        state.labelsList=defaultTags;
      }
    },
    saveLabel(state) {
      window.localStorage.setItem(localeLabelKey, JSON.stringify(state.labelsList));
      return undefined;
    },
    findCurrentLabel(state,id: string){
      state.currentLabel=state.labelsList.filter(item => item.id === id)[0];//不存在为undefined
    },
    creatLabel(state) {
      const labelName = window.prompt('请输入标签名');
      const names = state.labelsList.map((item) => item.name);
      if (labelName !== '' && labelName !== null&&names.indexOf(labelName) < 0) {
        const index=createId().toString();
        state.labelsList.push({'id':index,'name':labelName});
        store.commit('saveLabel');
      }else if(labelName !== '' && labelName !== null&&names.indexOf(labelName)>=0){
        alert('创建失败，待创建标签已经存在');
      }
    },
    updateLabel(state,name: string){
      if(state.currentLabel){
        const ids=state.labelsList.map((item) => item.id);
        const names = state.labelsList.map((item) => item.name);
        const index=ids.indexOf(state.currentLabel.id);
        if (names.indexOf(name)<0){
          state.labelsList[index].name=name;
          store.commit('saveLabel');
        }else{
          alert('标签名不得重复')
        }
      }
    },
    removeLabel(state){
      if(state.currentLabel){
        const ids=state.labelsList.map((item) => item.id);
        const index=ids.indexOf(state.currentLabel.id);
        state.labelsList.splice(index,1);
        store.commit('saveLabel');
      }
    },
  }
});

export default store;
