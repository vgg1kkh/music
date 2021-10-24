 import {combineReducers} from 'redux'
import { recommendReducer } from '../pages/discover/recommend/store'

 const allReducer = combineReducers(
     {
        recommend.recommendReducer,
     }
 )

 export default allReducer