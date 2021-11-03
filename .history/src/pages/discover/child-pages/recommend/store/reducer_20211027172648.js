import { Map } from 'immutable'
import { CHANGE_TOP_BANNERS ,CHANGE_HOT_RECOMMEND,CHANGE_NEW_ALBUM} from "./constants";

const initialState = Map({
    topBanner:[],
    hotRecommend:[],
    newAlbums:[]
})

function recommendReducer(state=initialState,action){
    log
    switch(action.type){
        case CHANGE_TOP_BANNERS:
            return (
                // {...state, topBanner:action.payload}
                // use set method for immutableJS
                state.set("topBanner", action.payload)
            )
        case CHANGE_HOT_RECOMMEND:
            return(
                state.set("hotRecommend",action.payload)
            )
        case CHANGE_NEW_ALBUM:
            return(
                state.set("newAlbums",action.payload)
            )
        default: return state;
    }
}

export default recommendReducer