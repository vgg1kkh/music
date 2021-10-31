import { Map } from "immutable"

const initialState = Map({
    currentSong: {}
})

const songDetailsReducer = (state=initialState,action)=>{
    switch(action.type){
        default: 
        return state
    }
}

export default songDetailsReducer