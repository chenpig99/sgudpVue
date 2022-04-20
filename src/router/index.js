import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login.vue'
import Home from '../pages/Home/home'
import Check from '../pages/goods management/check'
import Update from '../pages/goods management/update'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      show: false,
      view: false
    }
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      // requireAuth: true,
      //添加字段判断是否需要登录
      show: true,
      view: true
    },

  },
  {
    path: '/check',
    name: 'goods-check',
    component: Check,
    meta: {
      show: true,
      view: true
    }
  },
  {
    path: '/update',
    name: 'goods-update',
    component: Update,
    meta: {
      show: true,
      view: true
    }
  },
  

]

// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆

const router = new VueRouter({
  mode: 'hash',//解决js报错
  routes
});
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  } else {
    let token = localStorage.getItem('Authorization');
    if (token === null || token === '') {
      next('/login');
    } else {
      next();
    }
  }
});

export default router
