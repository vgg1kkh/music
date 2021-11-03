import axios from "axios"
import { BASE_URL, TIMEOUT } from "./configs"
// import NProgress from 'nprogress'
// import 'nprogress/nprogress.css'
// NProgress.configure({showSpinner:false})

const instance = axios.create({
  // 默认的配置
  baseURL: BASE_URL, // -> http://123.57.176.198:3000/banner
  timeout: TIMEOUT, // -> 10000
  withCredentials: true
})

instance.interceptors.request.use(
    config=>{
        // NProgress.start()
        return config
    },err=>{}
)

instance.interceptors.response.use(response => {
  // console.log('来到了response拦截success中');
  return response.data
}, err => {
  console.log('来到了response拦截failure中');
  console.log(err);
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        err.message = '请求错误'
        break
      case 401:
        err.message = '未授权的访问'
        break
      default:
        err.message = "其他错误信息"
    }
  }
  return err
})
export default instance