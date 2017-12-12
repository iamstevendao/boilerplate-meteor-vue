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

const PageAboutAsync = (resolve) => {
  import('/imports/ui/pages/about/about.vue')
    .then((PageAbout) => resolve(getModule(PageAbout)));
}

const PageLoginAsync = (resolve) => {
  import('/imports/ui/pages/login/login.vue')
    .then((PageLogin) => resolve(getModule(PageLogin)));
}

const PageSignUpAsync = (resolve) => {
  import('/imports/ui/pages/sign-up/sign-up.vue')
    .then((PageSignUp) => resolve(getModule(PageSignUp)));
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
    path: '/about',
    name: 'about',
    component: PageAboutAsync,
  },
  {
    path: '/login',
    name: 'login',
    component: PageLoginAsync,
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: PageSignUpAsync,
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
