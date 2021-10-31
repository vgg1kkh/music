import { createSongDetailsAction } from "../store"


export const createSongDetailsAction = (idx) =>{
    return (dispatch)=>{
        getSongDetails(idx).then(res=>console.log(res))
    }
}