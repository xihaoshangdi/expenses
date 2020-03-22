const localeKey = 'labelBar';
type LabelBar = {
  labelsList: string[];
  creat: () => undefined | { 'status': boolean; 'message': string };
  extract: () => string[];//返回状态和信息
  save: () => undefined;
}
const labelBar: LabelBar = {
  labelsList: [],
  creat() {
    const name = window.prompt("请输入标签名");
    if (name === "" && name === null) {
      window.alert("标签名不能为空");
    } else if(name!==null&&this.labelsList.indexOf(name)<0){
      this.labelsList.push(name);
      this.save();
    }else{
      return {status: false, message: '待创建标签已经存在'};
    }
  },
  extract() {
    this.labelsList = JSON.parse(window.localStorage.getItem(localeKey) || '["衣","食","住","行"]');
    return this.labelsList;
  },
  save(){
    window.localStorage.setItem(localeKey,JSON.stringify(this.labelsList));
    return undefined;
  }
};

export default labelBar;
