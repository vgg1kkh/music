import { getCurrentSongDetails } from "../../../services/player"
import { CHANGE_}


const changeCurrentSongDetails= (data)=>({
    type:
})

export const createSongDetailsAction = (ids) =>{
    return (dispatch)=>{
        getCurrentSongDetails(ids).then(res=>console.log(res))
        dispatch(changeCurrentSongDetails)
    }
}