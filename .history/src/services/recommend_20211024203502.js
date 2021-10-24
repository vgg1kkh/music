import instance from "./request";

function getTopBanners(){
    instance({
        url:"/banners"
    })
}

export default getTopBanners