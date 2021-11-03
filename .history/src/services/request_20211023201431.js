import axios from "axios"
import { BASE_URL, TIMEOUT } from "./configs"
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({showSpinner:false})

export const instance = axios.create({
    //Default Setting
    baseURL:BASE_URL,
    timeout:TIMEOUT,
    withCredentials:true,
    headers:{}
})

instance.interceptors.request.use(
    config=>{
        
    },err=>{}
)