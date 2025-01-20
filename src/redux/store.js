import { createStore } from "redux";
import bookingReducer from "./bookings/reducer";


 const bookingStore = createStore(bookingReducer)

 export default bookingStore