import { getSongDetails } from "../../../services/player"


export const createSongDetailsAction = (ids) =>{
    return (dispatch)=>{
        getSongDetails(ids).then(res=>console.log(res))
        dispatch(changeCurrentSongDetail)
    }
}