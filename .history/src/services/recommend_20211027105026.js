import instance from "./request";

export function getTopBanners(){
    return instance({
        url:"/banner"
    })
}

export function getHotRecommend(){
    return instance({
        url:"/personalized?limit=8",
        params:{
            limit:8
        }
    })
}

