import { getS }


export const createSongDetailsAction = (ids) =>{
    return (dispatch)=>{
        getSongDetails(idxs).then(res=>console.log(res))
    }
}