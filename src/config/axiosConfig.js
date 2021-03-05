import axios from 'axios'
import Store from '../vuex/store'
import {message} from 'ant-design-vue'

axios.defaults.baseURL = 'http://localhost:8888/'
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
// axios.defaults.headers.common['AuthorizationToken'] = window.sessionStorage.getItem("token")||Store.state.token;

//请求数据拦截器
axios.interceptors.request.use(request => {
  return request
}, error => {
  message.error('请求的资源不存在');
  Promise.reject(error);
});

/**
 * 数据处理
 * @type {{data: null, isValid: boolean}}
 */
const dataFilter = {
  isValid: false,
  data: null
}

//接收响应拦截器
axios.interceptors.response.use(response => {
  if (response.data) {
    if (response.data.code == undefined) {
      message.error('获取数据失败');
      dataFilter.isValid = false;
      dataFilter.data = undefined;
      return dataFilter;
    } else if (response.data.code == 200) {
      dataFilter.isValid = true;
      dataFilter.data = response.data;
      return dataFilter;
    } else {
      message.warning(response.data.msg);
      dataFilter.isValid = false;
      dataFilter.data = response.data;
      return dataFilter;
    }
  } else {
    message.error('获取数据超时');
    dataFilter.isValid = false;
    dataFilter.data = null;
    return dataFilter;
  }
}, error => {
  message.error('服务器无响应');
  dataFilter.isValid = false;
  dataFilter.data = null;
  Promise.reject(error);
  return dataFilter;
});
