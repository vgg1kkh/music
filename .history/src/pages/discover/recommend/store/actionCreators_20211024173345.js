import instance from "../../../../services/request"
import { CHANGE_TOP_BANNERS } from "./constants"


const getTopBannerAction= ()=>{

    const changeBannerAction = (banners) => ({
        type: CHANGE_TOP_BANNERS,
        payload: banners,
      });
    return(
        dispatch=>{
            instance.get({
                url:"http://123.207.32.32:8000/home"
            }).then((res)=>{
                dispatch(changeBannerAction(banners))
            }).catch(()=>{

            })
        }
    )
}