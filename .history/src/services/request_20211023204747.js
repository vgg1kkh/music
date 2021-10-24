import axios from "axios"
import { BASE_URL, TIMEOUT } from "./configs"
// import NProgress from 'nprogress'
// import 'nprogress/nprogress.css'
// NProgress.configure({showSpinner:false})

const instance = axios.create({
    // 默认的配置
    baseURL: BASE_URL, // -> http://123.57.176.198:3000/banner
    timeout: TIMEOUT, // -> 5000
    headers: {},
    withCredentials: true
  })

// instance.interceptors.request.use(
//     config=>{
//         NProgress.start()
//         return config
//     },err=>{}
// )

export default instance