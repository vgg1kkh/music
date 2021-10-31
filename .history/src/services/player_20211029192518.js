import instance from './request'

export function getSongDetails(ids){
    return (instance({
        url:"/song/detail",
        params:{
            idx
        }
    }))
}

