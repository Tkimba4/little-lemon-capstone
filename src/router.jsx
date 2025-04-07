import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import Home from "./pages/home";
import BookingPage from "./pages/BookingPage";
import ConfirmedBooking from "./pages/ConfirmedBooking";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "booking",
        element: <BookingPage />,
      },
      {
        path: "confirmed",
        element: <ConfirmedBooking />,
      },
      {
        path: "*",
        element: <Home/>,
      },
    ],
  },
]);

export default router;
