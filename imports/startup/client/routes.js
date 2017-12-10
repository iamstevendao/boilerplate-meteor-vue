import VueRouter from 'vue-router';
import { resolve } from 'path';

const getModule = (mod) => {
  if (process.env.NODE_ENV === 'test') {
    return mod;
  }
  return mod.default;
}

const PageHomeAsync = (resolve) => {
  import('/imports/ui/pages/home/home.vue')
    .then((PageHome) => resolve(getModule(PageHome)));
}

const PageNotFoundAsync = (resolve) => {
  import('/imports/ui/pages/not-found/not-found.vue')
    .then((PageNotFound) => resolve(getModule(PageNotFound)));
}

const routes = [
  {
    path: '/',
    component: PageHomeAsync,
  },
  {
    path: '/home',
    name: 'home',
    component: PageHomeAsync,
  },
  {
    path: '*',
    name: 'not-found',
    component: PageNotFoundAsync,
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

// router.beforeEach((to, from, next) => {
//   next();
// })

export default router;
