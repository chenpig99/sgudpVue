import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/login'
import main from '../components/main'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path:'/main',
    name:main,
    meta:{
      requireAuth:true,//添加字段判断是否需要登录
    },
    component:main,
  }

]
 
// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆

const router = new VueRouter({
  mode: 'history',//解决js报错
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
