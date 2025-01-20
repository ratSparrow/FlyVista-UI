import { CANCELBOOKING, CONFIRMBOOKING } from "./actionTypes";
import { initialState } from "./initialState";



const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONFIRMBOOKING:
           {
            const bookigWithId = action.payload
            bookigWithId.id = state.nextId
                return {
                    ...state,
                    items:[...state.items, bookigWithId],
                    nextId : state.nextId + 1
                }
           }
        case CANCELBOOKING:
           return JSON.stringify(state.items.filter(booking => booking.id !== action.payload))


        default:
            return state
    }
}

export default bookingReducer