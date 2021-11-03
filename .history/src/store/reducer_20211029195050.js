import { combineReducers } from "redux-immutable";

import { recommendReducer } from "../pages/discover/child-pages/recommend/store";
// import {reducer as loginReducer } from "@/components/theme-login/store"
import songDetailsReducer from "../pages/player/store/reducer";
const allReducer = combineReducers({
  recommend: recommendReducer,
  // loginState: loginReducer
  currentSong: songDetailsReducer
});

export default allReducer;
