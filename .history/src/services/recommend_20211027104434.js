import instance from "./request";

function getTopBanners(){
    return instance({
        url:"/banner"
    })
}

function getHotRecommend()

export default getTopBanners