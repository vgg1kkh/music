 import {combineReducers} from 'redux-i'
import { recommendReducer } from '../pages/discover/child-pages/recommend/store'

 const allReducer = combineReducers(
     {
        recommend:recommendReducer,
     }
 )

 export default allReducer