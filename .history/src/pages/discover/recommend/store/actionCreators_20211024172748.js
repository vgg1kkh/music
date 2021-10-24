import instance from "../../../../services/request"


const getTopBannerAction= ()=>{
    return(
        dispatch=>{
            instance.get({
                url:"/banner"
            }).then(()=>{
                
            })
        }
    )
}