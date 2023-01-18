import { createRouter, createWebHistory } from 'vue-router';
// Views
import HomeView from '@/views/HomeView';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import(/* webpackChunkName: "about" */ '@/views/CartView'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
