 import {combineReducers} from 'redux'
import { recommendReducer } from '../pages/discover/child-pages/recommend/'

 const allReducer = combineReducers(
     {
        recommend:recommendReducer,
     }
 )

 export default allReducer