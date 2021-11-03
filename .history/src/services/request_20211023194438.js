import axios from "axios"
import { BASE_URL } from "./configs"

export const instance = axios.create({
    //Default Setting
    baseURL:BASE_URL,
    timeout:T
    

})