import instance from "../../../../services/request"
import {CHA}


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