import { createSongDetailsAction } from "../store"


export const createSongDetailsAction = (ids) =>{
    return (dispatch)=>{
        getSongDetails(idx).then(res=>console.log(res))
    }
}