import axios from "axios"
import { BASE_URL, TIMEOUT } from "./configs"

export const instance = axios.create({
    //Default Setting
    baseURL:BASE_URL,
    timeout:TIMEOUT
    

})