 import {combineReducers} from 'redux'
 import recomendReducer from '../pages/discover/recommend/store/reducer'

 const allReducer = combineReducers(
     {
        recommendReducer
     }
 )

 export default allReducer