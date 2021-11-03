 import {combineReducers} from 'redux'
import { recommendReducer } from '../pages/discover/'

 const allReducer = combineReducers(
     {
        recommend:recommendReducer,
     }
 )

 export default allReducer