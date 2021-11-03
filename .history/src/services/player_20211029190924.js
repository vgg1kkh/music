import instance from './request'

export function getSongDetails(idx){
    return (instance({
        url:"/song/detail",
        params:{}
    }))
}

