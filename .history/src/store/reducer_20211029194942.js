import { combineReducers } from "redux-immutable";

import { recommendReducer } from "../pages/discover/child-pages/recommend/store";
// import {reducer as loginReducer } from "@/components/theme-login/store"


const allReducer = combineReducers({
  recommend: recommendReducer,
  // loginState: loginReducer
});

export default allReducer;
