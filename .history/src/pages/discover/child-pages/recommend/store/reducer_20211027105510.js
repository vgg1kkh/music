import { Map } from 'immutable'
import { CHANGE_TOP_BANNERS ,CH} from "./constants";

const initialState = Map({
    topBanner:[],
    hotRecommend:[]
})

function recommendReducer(state=initialState,action){
    switch(action.type){
        case CHANGE_TOP_BANNERS:
            return (
                // {...state, topBanner:action.payload}
                // use set method for immutableJS
                state.set("topBanner", action.payload)
            )
        case CHANGE_HO
        default: return state;
    }
}

export default recommendReducer