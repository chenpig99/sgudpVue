
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router/index';
import qs from 'qs';
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$qs = qs;



new Vue({
  el: '#app',
  router,
  component: App,
  render: h => h(App)
}).$mount('#app');