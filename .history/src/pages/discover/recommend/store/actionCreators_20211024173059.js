import instance from "../../../../services/request"
import { CHANGE_TOP_BANNERS } from "./constants"


const getTopBannerAction= ()=>{
    return(
        dispatch=>{
            instance.get({
                url:"/banner"
            }).then((res)=>{
                dispatch({
                    type:
                })
            }).catch(()=>{

            })
        }
    )
}