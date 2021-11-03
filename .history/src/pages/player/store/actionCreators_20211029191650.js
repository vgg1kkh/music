import { getSongDetails } from "../../../services/player"


export const createSongDetailAction = (idx) =>{
    return (dispatch)=>{
        getSongDetails(idx).then()
    }
}