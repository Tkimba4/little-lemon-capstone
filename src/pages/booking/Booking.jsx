import React from "react";
import BreadCrumb from "../../components/bread-crumb";
import usePageTitle from "../../hooks/usePageTitle";
import BookingForm from "../../components/Booking-form/";
const initializeTimes = () => {
  return [
    "17:00",
    "18:00", 
    "19:00",
    "20:00",
    "21:00",
    "22:00"
  ];
};

const updateTimes = (state, action) => {
  switch(action.type) {
    case 'UPDATE_TIMES':
      // Pour l'instant, retourne les mêmes horaires quelle que soit la date
      return state;
    default:
      return state;
  }
};

const Booking = () => {
  usePageTitle("Booking");
  const [availableTimes , setAvailableTimes] = React.useState([]);
  
  return (
    <>
      <BreadCrumb title="Booking" />
      <BookingForm />
    </>
  );
};

export default Booking;
