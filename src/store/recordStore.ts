
import Clone from '@/lib/Clone';

const localeKey = 'recordBar';

const recordStore = {
  RecordData:[] as RecordBar [],
  extractRecord() {
    this.RecordData=JSON.parse(window.localStorage.getItem(localeKey) || '[]');
    return this.RecordData;
  },
  saveRecord() {
    window.localStorage.setItem(localeKey, JSON.stringify(this.RecordData));
  },
  addRecord(record: RecordBar){
    this.RecordData.push(Clone(record));
    this.saveRecord();
  },
};

recordStore.extractRecord();

export default recordStore;