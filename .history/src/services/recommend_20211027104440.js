import instance from "./request";

function getTopBanners(){
    return instance({
        url:"/banner"
    })
}

function getHotRecommend(){
    return 
}

export default getTopBanners