import instance from "./request";

function getTopBanners(){
    instance.get({
        url:"/banners"
    })
}