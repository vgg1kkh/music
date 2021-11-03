import instance from './request'

export function getCurrentSongDetails(ids){
    return (instance({
        url:"/song/detail",
        params:{
            ids
        }
    }))
}

export function getLyric(id){
    return instance({
        url:`lyric?id=${id}`
    })
}
