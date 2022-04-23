import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login.vue'
import Home from '../pages/Home/home'
import Check from '../pages/goods management/check'
import Modify from '../pages/goods management/modify'
import Remove from '../pages/goods management/remove'
import Check2 from '../pages/staff management/check'
import Modify2 from '../pages/staff management/modify'
import Remove2 from '../pages/staff management/remove'
import Add2 from '../pages/staff management/add'
import Handle2 from '../pages/staff management/handle'

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
    path: '/modify',
    name: 'goods-modify',
    component: Modify,
    meta: {
      show: true,
      view: true
    }
  },
  {
    path: '/remove',
    name: 'goods-remove',
    component: Remove,
    meta: {
      show: true,
      view: true
    }
  },
  {
    path: '/remove2',
    name: 'staff-remove',
    component: Remove2,
    meta: {
      show: true,
      view: true
    }
  },
  {
    path: '/add2',
    name: 'staff-remove',
    component: Add2,
    meta: {
      show: true,
      view: true
    }
  },
  {
    path: '/modify2',
    name: 'staff-remove',
    component: Modify2,
    meta: {
      show: true,
      view: true
    }
  },
  {
    path: '/check2',
    name: 'staff-remove',
    component: Check2,
    meta: {
      show: true,
      view: true
    },
  },
    {
      path: '/handle2',
      name: 'staff-remove',
      component: Handle2,
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
