import Clone from '@/lib/Clone';

const localeKey = 'recordBar';

const record = {
  data:[] as RecordBar [],
  add(record: RecordBar){
    this.data.push(Clone(record));
  },
  extract() {
    this.data=JSON.parse(window.localStorage.getItem(localeKey) || '[]');
  },
  save() {
    window.localStorage.setItem(localeKey, JSON.stringify(this.data));
  }
};

export default record;

