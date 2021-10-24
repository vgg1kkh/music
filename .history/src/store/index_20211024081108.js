import {createStore,compose,applyMiddleware} from 'redux'
import th

import allReducer from './reducer'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore()











export default store