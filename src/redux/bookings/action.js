import { CANCELBOOKING, CONFIRMBOOKING } from "./actionTypes"

export const confirmBooking = (booking) =>{
    return {
        type:CONFIRMBOOKING,
        payload:booking
    }
}
export const cancelBooking = (bookingID) =>{
    return {
        type:CANCELBOOKING,
        payload:bookingID
    }
}