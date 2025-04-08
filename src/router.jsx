import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import Home from "./pages/home";
import Booking from "./pages/booking";

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
        element: <Booking />,
      },
      {
        path: "*",
        element: <Home />,
      },
    ],
  },
]);

export default router;
