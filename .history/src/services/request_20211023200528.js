import axios from "axios"
import { BASE_URL, TIMEOUT } from "./configs"
import NProgress from 'nprocess'
import 'nprocess/np'

export const instance = axios.create({
    //Default Setting
    baseURL:BASE_URL,
    timeout:TIMEOUT,
    withCredentials:true,
    headers:{}
})