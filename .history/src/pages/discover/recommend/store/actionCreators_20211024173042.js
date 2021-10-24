import instance from "../../../../services/request"
import {CH}


const getTopBannerAction= ()=>{
    return(
        dispatch=>{
            instance.get({
                url:"/banner"
            }).then((res)=>{
                dispatch()
            }).catch(()=>{

            })
        }
    )
}