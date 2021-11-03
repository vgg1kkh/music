import { Map } from "immutable"

const initialState = Map({
    songDetails:[]
})

const songDetailsReducer = (state=initialState,action)=>{
    switch(action.type){
        default: 
        return state
    }
}

export default songDetailsReducer