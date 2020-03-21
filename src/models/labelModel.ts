const localeKey = 'labelBar';
type LabelBar = {
  labelsList: string[];
  creat: (data: string) => string | { 'status': boolean; 'message': string };
  extract: () => string[];//返回状态和信息
  save: () => undefined;
}
const labelBar: LabelBar = {
  labelsList: [],
  creat(data) {
    if (this.labelsList.indexOf(data)>=0) {
      return {status: false, message: '待创建标签已经存在'};
    } else {
      this.labelsList.push(data);
      this.save();
      return data;
    }
  },
  extract() {
    this.labelsList = JSON.parse(window.localStorage.getItem(localeKey) || '[]');
    return this.labelsList;
  },
  save(){
    window.localStorage.setItem(localeKey,JSON.stringify(this.labelsList));
    return undefined;
  }
};

export default labelBar;
