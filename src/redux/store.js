import { createStore } from "redux";
import bookingReducer from "./bookings/bookingReducer";

 const bookingStore = createStore(bookingReducer)

 export default bookingStore