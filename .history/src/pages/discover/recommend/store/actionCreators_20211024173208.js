import instance from "../../../../services/request"
import { CHANGE_TOP_BANNERS } from "./constants"


const getTopBannerAction= ()=>{

    export const changeBannerAction = (banners) => ({
        type: CHANGE_BANNERS,
        payload: banners,
      });
    return(
        dispatch=>{
            instance.get({
                url:"/banner"
            }).then((res)=>{
                dispatch({
                    type:CHANGE_TOP_BANNERS,
                    payload:
                })
            }).catch(()=>{

            })
        }
    )
}