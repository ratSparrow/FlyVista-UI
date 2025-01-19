import { CONFIRMBOOKING } from "./actionTypes";

const initialState = []

const bookingReducer = (state = initialState, action) =>{
    switch (action.type) {
        case CONFIRMBOOKING:
         return [
            ...state,
            action.payload
         ] 
         
    
        default:
            return state
    }
}

export default bookingReducer