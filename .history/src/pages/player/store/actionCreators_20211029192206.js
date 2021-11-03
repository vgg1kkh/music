import { createS } from "../../../services/player"


export const createSongDetailsAction = (idx) =>{
    return (dispatch)=>{
        getSongDetails(idx).then(res=>console.log(res))
    }
}