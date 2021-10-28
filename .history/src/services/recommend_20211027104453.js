import instance from "./request";

function getTopBanners(){
    return instance({
        url:"/banner"
    })
}

function getHotRecommend(){
    return instance({
        
    })
}

export default getTopBanners