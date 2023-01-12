import { GET_DATA, TRIG } from "./constants"


const initialState = {
    posts: [],
    trigger: false
}


export const reducer = (state = initialState, action)=>{
    switch(action.type){
        case GET_DATA:
            return {...state, posts: action.payload}
        case TRIG:
            return {...state, trigger: !state.trigger}
    } 
         
}