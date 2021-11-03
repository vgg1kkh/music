import instance from "./request";

export function getTopBanners(){
    return instance({
        url:"/banner"
    })
}

export function getHotRecommend(){
    return instance({
        url:"/personalized",
        params:{
            limit:8
        }
    })
}

