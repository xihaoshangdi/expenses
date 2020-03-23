type RecordBar = {
  amount: string;
  headline: string;
  tags: string[];
  date: string;
  notes: string;
  type: string;
}
type Tag = {
  id: string;
  name: string;
}
type LabelBar = {
  labelsList: Tag[];
  creat: () => undefined | { 'status': boolean; 'message': string };
  remove: (id: string) => undefined;
  update: (id: string,name: string) => { 'status': boolean; 'message': string };
  extract: () => Tag[];//返回状态和信息
  save: () => undefined;
}

interface Window {
  labelList: Tag[];
}