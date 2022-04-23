import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login.vue'
import Home from '../pages/Home/home'
import Check from '../pages/goods management/check'
import Modify from '../pages/goods management/modify'
import Remove from '../pages/goods management/remove'
import Check2 from '../pages/staff management/check'
import Handle2 from '../pages/staff management/handle'
import theNextStep from "../pages/Input/theNextStep.vue"
import theFirstInput from "../pages/Input/theFirstInput.vue"
import totalCheck from "../pages/Input/totalCheck.vue"
import output from "../pages/Output/output.vue"
import outputCheck from "../pages/Output/outputCheck.vue"
import inputCheck from "../pages/Input/inputCheck.vue"
import checkOutput from "../pages/Output/checkOutput.vue"
import backup from "../pages/Technology/Backup.vue"
import recover from '../pages/Technology/Recover.vue'
import Warehouse from "../pages/warehouse/index.vue"
import Huanjing from "../pages/huanjing/index.vue"
import Jiagong from "../pages/jiagong/index.vue"
import Vegetable  from "../pages/vegetable/index.vue"
import Henapple  from "../pages/henapple/index.vue"
import Process  from "../pages/process/index.vue"
import Garden  from "../pages/garden/index.vue"
import Chicken  from "../pages/chicken/index.vue"

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
  {
    name: 'nextInput',
    path: '/nextInput',
    component: theNextStep,
    meta: {
        show: true,
        view: true
    }
},
{
    name: 'firstInput',
    path: '/firstInput',
    component: theFirstInput,
    meta: {
        show: true,
        view: true
    }
},
{
    name: 'totalCheck',
    path: '/totalCheck',
    component: totalCheck,
    meta: {
        show: true,
        view: true
    }
},
{
    name: 'output',
    path: '/output',
    component: output,
    meta: {
        show: true,
        view: true
    }
},
{
    name: 'outputCheck',
    path: '/outputCheck',
    component: outputCheck,
    meta: {
        show: true,
        view: true
    }
},

{
    name: 'inputCheck',
    path: "/inputCheck",
    component: inputCheck,
    meta: {
        show: true,
        view: true,
    },
},
{
    name: 'checkOutput',
    path: "/checkOutput",
    component: checkOutput,
    meta: {
        show: true,
        view: true,
    }
},
{
    name: 'backup',
    path: "/backup",
    component: backup,
    meta: {
        show: true,
        view: true,
    }
},
{
    name: 'recover',
    path: "/recover",
    component: recover,
    meta: {
        show: true,
        view: true,
    }
},
{
  name:'warehouse',
  path:'/warehouse',
  component:Warehouse,
  meta: {
      show: true,
      view: true
  }
},
{
  name:'huanjing',
  path:'/huanjing',
  component:Huanjing,
  meta: {
      show: true,
      view: true
  }
},
{
  name:'jiagong',
  path:'/jiagong',
  component:Jiagong,
  meta: {
      show: true,
      view: true
  }
},
{
  name:'vegetable',
  path:'/vegetable',
  component:Vegetable,
  meta: {
      show: true,
      view: true
  }
},
{
  name:'henapple',
  path:'/henapple',
  component:Henapple,
  meta: {
      show: true,
      view: true
  }
},
{
  name:'process',
  path:'/process',
  component:Process,
  meta: {
      show: true,
      view: true
  }
},
{
  name:'garden',
  path:'/garden',
  component:Garden,
  meta: {
      show: true,
      view: true
  }
},
{
  name:'chicken',
  path:'/chicken',
  component:Chicken,
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
