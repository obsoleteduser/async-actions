import { GET_DATA } from "./constants"

export const getData = () =>{
    return dispatch => {
        fetch('https://northwind.vercel.app/api/customers')
        .then(response => response.json())
        .then(data => dispatch({type: GET_DATA, payload: data}))
    }
}