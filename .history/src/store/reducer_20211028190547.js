import { combineReducers } from "redux-immutable";

import { recommendReducer } from "../pages/discover/child-pages/recommend/store";
import {reducer as loginReducer } from ""

const allReducer = combineReducers({
  recommend: recommendReducer,
});

export default allReducer;
