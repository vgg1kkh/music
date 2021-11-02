import instance from './request'

export function getCurrentSongDetails(ids){
    return (instance({
        url:"/song/detail",
        params:{
            ids
        }
    }))
}

e
