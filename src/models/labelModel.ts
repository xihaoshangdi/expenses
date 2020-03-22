const localeKey = 'labelBar';
type Tag = {
  id: string;
  name: string;
}
type LabelBar = {
  labelsList: Tag[];
  creat: () => undefined | { 'status': boolean; 'message': string };
  extract: () => Tag[];//返回状态和信息
  save: () => undefined;
}
const labelBar: LabelBar = {
  labelsList: [],
  creat() {
    const labelName = window.prompt('请输入标签名');
    const names = this.labelsList.map((item) => item.name);
    if (labelName === '' && labelName === null) {
      window.alert('标签名不能为空');
    } else if (labelName !== null && names.indexOf(labelName) < 0) {
      this.labelsList.push({'id':labelName,'name':labelName});
      console.log(this.labelsList);
      this.save();
    } else {
      return {status: false, message: '待创建标签已经存在'};
    }
  },
  extract() {
    const defaultTags=[{id:'衣',name:'衣'},{id:'食',name:'食'},{id:'住',name:'住'},{id:'行',name:'行'}];
    if (window.localStorage.getItem(localeKey) ===null){
      this.labelsList=defaultTags;
    }else{
      this.labelsList=JSON.parse(window.localStorage.getItem(localeKey)!);
    }
    return this.labelsList;
  },
  save() {
    window.localStorage.setItem(localeKey, JSON.stringify(this.labelsList));
    return undefined;
  }
};

export default labelBar;
