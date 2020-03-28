import Vue from 'vue';
import VueRouter from 'vue-router';
import Money from '@/views/Money.vue';
import Labels from '@/views/Labels.vue';
import Statistics from '@/views/Statistics.vue';
import NotFound from '@/views/NotFound.vue';
import EditLabel from '@/views/EditLabel.vue';
import Qrcode from '@/views/Qrcode.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/money'//重定向到一个路径
  },
  {
    path: '/money',
    component: Money
  },
  {
    path: '/labels',
    component: Labels
  },
  {
    path: '/labels/edit/:id',
    component: EditLabel
  },
  {
    path: '/statistics',
    component: Statistics
  },
  {
    path: '/qrcode',
    component: Qrcode
  },
  {
    path: '*',
    component: NotFound
  }
];

const router = new VueRouter({
  routes
});

export default router;
