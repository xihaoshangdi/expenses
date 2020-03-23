const localeKey = 'recordBar';


const record = {
  clone(data: RecordBar[] | RecordBar) {
    return JSON.parse(JSON.stringify(data)) as RecordBar;
  },
  extract() {
    return JSON.parse(window.localStorage.getItem(localeKey) || '[]');
  },
  save(data: RecordBar[]) {
    window.localStorage.setItem(localeKey, JSON.stringify(data));
  }
};

export default record;

