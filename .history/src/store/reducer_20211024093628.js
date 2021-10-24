 import {combineReducers} from 'redux'
 import recomendReducer from '../pages/discover/recommend/store/reducer'

 const allReducer = combineReducers(
     {
        recomendReducer
     }
 )

 export default allReducer