import { getCurrentSongDetails } from "../../../services/player";
import { CHANGE_CURRENT_SONG_DETAILS } from "./constants";

const changeCurrentSongDetails = (data) => ({
  type: CHANGE_CURRENT_SONG_DETAILS,
  payload: data,
});

export const createSongDetailsAction = (ids) => {
  return (dispatch) => {
    getCurrentSongDetails(ids).then((res) => {
      dispatch(changeCurrentSongDetails(res));
    });
  };
};

export const changeCurrentSongAction = (ids) => ({
    
})