import { GET_DATA } from "./constants"


const initialState = {
    posts: []
}


export const reducer = (state = initialState, action)=>{
    switch(action.type){
        case GET_DATA:
            return {...state, posts: action.payload}
    } 
         
}