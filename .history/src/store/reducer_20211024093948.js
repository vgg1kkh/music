 import {combineReducers} from 'redux'
import { recommendReducer } from '../pages/discover/recommend/store'

 const allReducer = combineReducers(
     {
        recommendReducer,
     }
 )

 export default allReducer