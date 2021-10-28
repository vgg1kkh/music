import instance from "./request";

exfunction getTopBanners(){
    return instance({
        url:"/banner"
    })
}

export function getHotRecommend(){
    return instance({
        url:"/personalized"
    })
}

