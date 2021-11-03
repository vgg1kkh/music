import {createStore,compose,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';

import allReducer from './reducer'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(allReducer,composeEnhancers())











export default store