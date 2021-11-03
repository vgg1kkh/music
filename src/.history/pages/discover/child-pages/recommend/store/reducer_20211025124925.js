import { Map } from 'immutable'
import { CHANGE_TOP_BANNERS } from "./constants";

const initialState = Map({
    topBanner:[
        {
            url:"",
            targetId:""
        }
    ]
})

function recommendReducer(state=initialState,action){
    switch(action.type){
        case CHANGE_TOP_BANNERS:
            return (
                // {...state, topBanner:action.payload}
                // use set method for immutable
                state.set("topBanner", action.payload)
            )
        default: return state;
    }
}

export default recommendReducer