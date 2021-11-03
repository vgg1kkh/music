import axios from "axios"
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' // progress bar style
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

instance.interceptors.response.use(
  // 响应拦截
  (res) => {
    NProgress.done()// 关闭滚动条
    return res.data
  },
  (err) => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          console.log('请求错误')
          break
        case 401:
          console.log('未授权访问')
          break
        default:
          console.log('其他错误信息')
      }
    }
    return err
  }
)


export default instance