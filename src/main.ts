import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';

Vue.config.productionTip = false;
Vue.component('Icon', Icon);
Vue.component('Layout', Layout);
const vueHashCalendar=require('vue-hash-calendar').default; //ts 引入js 模块
import 'vue-hash-calendar/lib/vue-hash-calendar.css'
import labelBar from '@/models/labelModel';
Vue.use(vueHashCalendar);

window.labelList=labelBar.extract();


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
