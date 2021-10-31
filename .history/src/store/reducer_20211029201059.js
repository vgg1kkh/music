import { combineReducers } from "redux-immutable";

import { recommendReducer } from "../pages/discover/child-pages/recommend/store";
// import {reducer as loginReducer } from "@/components/theme-login/store"
import songDetailsReducer from "../pages/player/store";
const allReducer = combineReducers({
  recommend: recommendReducer,
  // loginState: loginReducer
  player: songDetailsReducer
});

export default allReducer;
