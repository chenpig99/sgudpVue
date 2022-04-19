import axios from 'axios'
import store from './store/index'
//创建loading实例
let loadingInstance;
const axio = axios;
//创建统一的url
axio.defaults.baseURL = 'http://localhost:8081';
//数据格式为json,下载文件要改
axio.defaults.headers.post['Content-Type'] = 'application/json';
//设置cross跨域 并设置访问权限 允许跨域携带cookie信息
axio.defaults.withCredentials = true;


//拦截器
axio.interceptors.request.use(
  config => {
    //判断是都否有token,有则加进请求头
    if (localStorage.getItem('Authorization')) {
      config.headers.Authorization = localStorage.getItem('Authorization');
      console.log(localStorage.getItem('Authorization'));
    }
    return config;
  },
  err => {
    console.log(localStorage.getItem('Authorization'));
    return Promise.reject(err);
  }
);

export default axio;
