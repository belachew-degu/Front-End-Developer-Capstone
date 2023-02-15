import React from 'react'
import BookingForm from '../reservePages/BookingForm'
import Heading from '../reservePages/Heading'
import { fetchAPI } from "../../bookingsAPI";
import { useReducer } from 'react';

function BookingPage () {

  function updateTimes(date) {
    return fetchAPI(date);
  }

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);


  return (
    <>
     <Heading />
      <BookingForm availableTimes={availableTimes} updateTimes={dispatch} />
      
       </>
  )
}

export default BookingPage 