import React, { useState } from "react";
import style from "./BookingForm.module.scss";
import BookingSuccess from "../booking-success/BookingSuccess";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    guests: "1",
    occasion: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [reservation, setReservation] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
    }
    if (
      !formData.date &&
      formData.date < new Date().toISOString().split("T")[0]
    ) {
      newErrors.date = "Date is required and must be in the future";
    }

    if (!formData.time) {
      newErrors.time = "L'heure est requise";
    }

    if (!formData.guests || (formData.guests < 1 && formData.guests > 10)) {
      newErrors.guests = "Number of guests must be between 1 and 10";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setIsSubmitted(true);
      setReservation(formData);
      setFormData({
        name: "",
        date: "",
        time: "",
        guests: "1",
        occasion: "",
      });
    }
  };

  return (
    <>
      {isSubmitted && (
        <BookingSuccess reservation={reservation} close={setIsSubmitted} />
      )}
      <form
        onSubmit={handleSubmit}
        className={style.form}
        data-aos="flip-left"
        data-aos-duration="500"
      >
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            min={3}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min={new Date().toISOString().split("T")[0]}
            required
          />
          {errors.date && <p style={{ color: "red" }}>{errors.date}</p>}
        </div>

        <div>
          <label htmlFor="time">Time</label>
          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          >
            <option value="17:00" selected>17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
            <option value="22:00">22:00</option>
          </select>
          {errors.time && <p style={{ color: "red" }}>{errors.time}</p>}
        </div>

        <div>
          <label htmlFor="guests">Guests</label>
          <input
            type="number"
            id="guests"
            name="guests"
            min="1"
            max="10"
            value={formData.guests}
            onChange={handleChange}
            required
          />
          {errors.guests && <p style={{ color: "red" }}>{errors.guests}</p>}
        </div>

        <div>
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            name="occasion"
            value={formData.occasion}
            onChange={handleChange}
          >
            <option value="none">None</option>
            <option value="birthday">Birhtday</option>
            <option value="anniversary">Anniversary</option>
            <option value="Engagement">Engagement</option>
          </select>
          {errors.occasion && <p style={{ color: "red" }}>{errors.occasion}</p>}
        </div>

        <div>
          <button className="btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default BookingForm;
