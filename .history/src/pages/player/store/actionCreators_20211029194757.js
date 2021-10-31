import { getCurrentSongDetails } from "../../../services/player"
import { CHAN}


const changeCurrentSongDetails= (data)=>({
    type:
})

export const createSongDetailsAction = (ids) =>{
    return (dispatch)=>{
        getCurrentSongDetails(ids).then(res=>console.log(res))
        dispatch(changeCurrentSongDetails)
    }
}