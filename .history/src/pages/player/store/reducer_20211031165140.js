import { Map } from "immutable";
import { CHANGE_CURRENT_SONG_DETAILS, CHANGE_LYRIC_LIST } from "./constants";

const initialState = Map({
  currentSong: {},
  lyricList: [],
  
});

const songDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CURRENT_SONG_DETAILS:
      return state.set("currentSong", action.payload);
    case CHANGE_LYRIC_LIST:
      return state.set("lyricList", action.payload);
    default:
      return state;
  }
};

export default songDetailsReducer;
