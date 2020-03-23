import createId from '@/lib/CreatId';

const localeKey = 'labelBar';

const labelStore = {
  labelsList:[] as Tag[],
  extractLabel() {
    const defaultTags=[{id:'衣',name:'衣'},{id:'食',name:'食'},{id:'住',name:'住'},{id:'行',name:'行'}];
    if (window.localStorage.getItem(localeKey) ===null){
      this.labelsList=defaultTags;
    }else{
      this.labelsList=JSON.parse(window.localStorage.getItem(localeKey)||'[]')||[];
    }
    return this.labelsList;
  },
  saveLabel() {
    window.localStorage.setItem(localeKey, JSON.stringify(this.labelsList));
    return undefined;
  },
  findLabel(id: string) {
    return this.labelsList.filter(item => item.id === id)[0];
  },
  creatLabel() {
    const labelName = window.prompt('请输入标签名');
    const names = this.labelsList.map((item) => item.name);
    if (labelName === '' && labelName === null) {
      window.alert('标签名不能为空');
    } else if (labelName !== null && names.indexOf(labelName) < 0) {
      const index=createId().toString();
      this.labelsList.push({'id':index,'name':labelName});
      this.saveLabel();
    } else {
      alert('创建失败，待创建标签已经存在');
    }
  },
  removeLabel(id: string){
    const idGroup=this.labelsList.map((item) => item.id);
    const index=idGroup.indexOf(id);
    if(index>=0){
      this.labelsList.splice(index,1);
      this.saveLabel();
    }
    return undefined;
  },
  updateLabel(id: string,name: string){
    const idGroup=this.labelsList.map((item) => item.id);
    const names = this.labelsList.map((item) => item.name);
    const index=idGroup.indexOf(id);
    if(index>=0&&names.indexOf(name)<0){
      this.labelsList[index].name=name;
      this.saveLabel();
      return {status: true, message: 'success'};
    }else{
      return {status: false, message: '标签名不能相同'};
    }
  }
};

labelStore.extractLabel();

export default labelStore;