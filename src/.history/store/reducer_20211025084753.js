 import {combineReducers} from 'redux'
import { recommendReducer } from '../pages/discover/child-pages/'

 const allReducer = combineReducers(
     {
        recommend:recommendReducer,
     }
 )

 export default allReducer