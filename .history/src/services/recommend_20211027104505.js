import instance from "./request";

function getTopBanners(){
    return instance({
        url:"/banner"
    })
}

export function getHotRecommend(){
    return instance({
        url:"/personalized"
    })
}

export default getTopBanners