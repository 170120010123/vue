
import axios from 'axios'
import SharedData from '@/utils/localStorage.js'

// 创建axios实例
const service = axios.create({
   baseURL: '/api', // api的base_url
  timeout: 5000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  // 不是login添加token
  if (config.url.indexOf("login") == -1) {
    config.headers["token"] = SharedData.getToken();
  }
 
  return config
}, error => {
  return Promise.reject(error);
})


// respone拦截器
service.interceptors.response.use(
  response => {
    console.log("response");
    // console.log(response);
    if (response.data.code === "5555") {
      SharedData.clearToken();
     
      window.location.href = "/login";
      alert("请登录后进行操作")
    }
    return response;
  }, error => {
    console.log("error");
    console.log(error);
    return Promise.reject(error)
  })

export default service