import instance from "./request";

function getTopBanners(){
    instance({
        url:"/banner"
    })
}

export default getTopBanners