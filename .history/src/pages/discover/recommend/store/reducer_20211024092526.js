import { CHANGE_TOP_BANNERS } from "./constants";

const initialState = {
    topBanner:[
        {
            url:"",
            targetId:""
        }
    ]
}

function recomendReducer(state=initialState,action){
    switch(action.type){
        case CHANGE_TOP_BANNERS:
            return (
                {...initialState, topBanner:action.payload}
            )
        default: return state;
    }
}