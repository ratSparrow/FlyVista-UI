

import './App.css'
import Header from './components/shared/Header'
import BookingData from './components/main/BookingData'

import { Provider } from 'react-redux'
import bookingStore from "./redux/store"
import BookingForm from './components/main/BookingForm'
function App() {


  return (
    <Provider store={bookingStore}>
      <Header />
      <section>
        {/* Input Data */}
        <BookingForm />

        {/* Booking Data */}
        <BookingData />
      </section>
    </Provider>
  )
}

export default App
