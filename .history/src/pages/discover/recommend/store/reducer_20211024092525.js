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
        case C:
            return (
                {...initialState, topBanner:action.payload}
            )
        default: return state;
    }
}