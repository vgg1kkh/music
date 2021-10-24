import instance from "./request";

function getTopBanners(){
    return instance({
        url:"/banner"
    })
}

export default getTopBanners