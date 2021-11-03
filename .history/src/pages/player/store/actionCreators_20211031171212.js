import { getCurrentSongDetails } from "../../../services/player";
import { CHANGE_CURRENT_SONG_DETAILS ,CHANGE_LYRIC_LIST, CHANGE_PLAY_LIST,CHANGE_CURRENT_SONG_INDEX} from "./constants";

const changeCurrentSongDetails = (data) => ({
  type: CHANGE_CURRENT_SONG_DETAILS,
  payload: data,
});

export const createSongDetailsAction = (ids) => {
  
  return (dispatch,getState) => {


    
    getCurrentSongDetails(ids).then((res) => {
      dispatch(changeCurrentSongDetails(res.songs[0]));
    });
  };
};

export const changeCurrentSongAction = (ids) => ({

})

export const changePlayListAction = list => ({
    type: CHANGE_PLAY_LIST,
    payload: list
})

export const changeCurrentSongIndexAction = id => ({
    type: CHANGE_CURRENT_SONG_INDEX,
    payload: id
})