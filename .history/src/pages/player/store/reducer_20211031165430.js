import { Map } from "immutable";
import { CHANGE_CURRENT_SONG_DETAILS, CHANGE_LYRIC_LIST, CHANGE_PLAY_LIST,CHANGE_CURRENT_SONG_INDEX} from "./constants";

const initialState = Map({
  currentSong: {},
  lyricList: [],
  playList: [],
  currentSongIndex:0,

});

const songDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CURRENT_SONG_DETAILS:
      return state.set("currentSong", action.payload);
    case CHANGE_LYRIC_LIST:
      return state.set("lyricList", action.payload);
    case CHANGE_CURRENT_SONG_INDEX:
        return state.set("currentSongIndex", action.payload)
    case CHANGE_PLAY_LIST
    default:
      return state;
  }
};

export default songDetailsReducer;
