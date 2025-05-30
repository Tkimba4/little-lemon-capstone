import React from "react";
import BreadCrumb from "../../components/bread-crumb";
import usePageTitle from "../../hooks/usePageTitle";
import BookingForm from "../../components/Booking-form/";

const Booking = () => {
  usePageTitle("Booking");

  return (
    <>
      <BreadCrumb title="Booking" />
      <div className="container">
        <BookingForm />
      </div>
    </>
  );
};

export default Booking;
