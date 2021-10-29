import { Map } from "immutable";
import {
  CHANGE_TOP_BANNERS,
  CHANGE_HOT_RECOMMEND,
  CHANGE_NEW_ALBUM,
  CHANGE_UP_RANKING,
  CHANGE_NEW_RANKING,
  CHANGE_ORIGIN_RANKING,
  CHNAGE_SETTLE_SINGER
} from "./constants";

const initialState = Map({
  topBanner: [],
  hotRecommend: [],
  newAlbums: [],

  upRanking: {},
  newRanking: {},
  originRanking: {},

  settleSings: []
});

function recommendReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TOP_BANNERS:
      return (
        // {...state, topBanner:action.payload}
        // use set method for immutableJS
        state.set("topBanner", action.payload)
      );
    case CHANGE_HOT_RECOMMEND:
      return state.set("hotRecommend", action.payload);
    case CHANGE_NEW_ALBUM:
      return state.set("newAlbums", action.payload);

    case CHANGE_UP_RANKING:
      console.log("upranking reducer",action.type,action.payload)
      return state.set("upRanking", action.payload);
    case CHANGE_NEW_RANKING:
      return state.set("newRanking", action.payload);
    case CHANGE_ORIGIN_RANKING:
      return state.set("originRanking", action.payload);
    case CHANGE_SETTLE_SINGE：
      return state.set("settleSings",action.payload)
    
    default:
      return state;
  }
}

export default recommendReducer;
