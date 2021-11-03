 import {combineReducers} from 'redux'
 import recommendReducer from '../pages/discover/recommend/store/reducer'

 const allReducer = combineReducers(
     {
        recommendReducer,
     }
 )

 export default allReducer