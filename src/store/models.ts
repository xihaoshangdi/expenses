
import recordStore from '@/store/recordStore';
import labelStore from '@/store/labelStiore';

const store = {
  ...recordStore,
  ...labelStore
};

console.log(store);

export default store;