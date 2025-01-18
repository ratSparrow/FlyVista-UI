
import { useRef, useState } from 'react'
import './App.css'
import Header from './components/shared/Header'
import BookingData from './components/main/BookingData'
import toast from 'react-hot-toast'

function App() {
  const [bookingData,setBookingData]= useState([])
  const fromRef = useRef()
  const toRef = useRef()
  const dateRef = useRef()
  const guestRef = useRef()
  const classRef = useRef()

const submitHandler  =(event) =>{
  event.preventDefault()
  const booking = {
    from:fromRef.current.value,
    to:toRef.current.value,
    date:dateRef.current.value,
    guest:guestRef.current.value,
    class:classRef.current.value,
  }
  console.log(booking)

  if(bookingData.length < 3){
    const newBookingData =  [...bookingData,booking]
    setBookingData(newBookingData)
  }else{
    toast.error("You can add only three bookings!")
  }


}

  return (
    <>
    <Header/>
      <section>
        {/* Input Data */}
        <div className="mt-[160px] mx-4 md:mt-[160px] relative">
          <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
            <form onSubmit={submitHandler} className="first-hero lws-inputform">
              {/* <!-- From --> */}
   
              <div className="des-from">
                <p>Destination From</p>
                <div className="flex flex-row">
                  <img src="./img/icons/Frame.svg" alt="" />
                  <select ref={fromRef} className="outline-none px-2 py-2 w-full" name="from" id="lws-from" required>
                    <option value="" hidden>Please Select</option>
                    <option>Dhaka</option>
                    <option>Sylhet</option>
                    <option>Saidpur</option>
                    <option>Cox&apos;s Bazar</option>
                  </select>
                </div>
              </div>

              {/* <!-- To --> */}
              <div className="des-from">
                <p>Destination To</p>
                <div className="flex flex-row">
                  <img src="./img/icons/Frame.svg" alt="" />
                  <select ref={toRef} className="outline-none px-2 py-2 w-full" name="to" id="lws-to" required>
                    <option value="" hidden>Please Select</option>
                    <option>Dhaka</option>
                    <option>Sylhet</option>
                    <option>Saidpur</option>
                    <option>Coxs Bazar</option>
                  </select>
                </div>
              </div>

              {/* <!-- Date --> */}
              <div className="des-from">
                <p>Journey Date</p>
                <input ref={dateRef} type="date" className="outline-none px-2 py-2 w-full date" name="date" id="lws-date" required />
              </div>

              {/* <!-- Guests --> */}
              <div className="des-from">
                <p>Guests</p>
                <div className="flex flex-row">
                  <img src="./img/icons/Vector (1).svg" alt="" />
                  <select ref={guestRef} className="outline-none px-2 py-2 w-full" name="guests" id="lws-guests" required>
                    <option value="" hidden>Please Select</option>
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons</option>
                    <option value="3">3 Persons</option>
                    <option value="4">4 Persons</option>
                  </select>
                </div>
              </div>

              {/* <!-- className --> */}
              <div className="des-from !border-r-0">
                <p>className</p>
                <div className="flex flex-row">
                  <img src="./img/icons/Vector (3).svg" alt="" />
                  <select ref={classRef} className="outline-none px-2 py-2 w-full" name="ticketclassName" id="lws-ticketclassName" required>
                    <option value="" hidden>Please Select</option>
                    <option>Business</option>
                    <option>Economy</option>
                  </select>
                </div>
              </div>

              <button  className="addCity" type="submit" id="lws-addCity">
                <svg width="15px" height="15px" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                <input type='submit' className="text-sm"/>
              </button>
            </form>
          </div>
        </div>

       <BookingData bookingData={bookingData}/>
      </section>
    </>
  )
}

export default App
