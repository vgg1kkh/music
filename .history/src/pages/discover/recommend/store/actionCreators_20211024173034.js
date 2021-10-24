import instance from "../../../../services/request"
import 


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