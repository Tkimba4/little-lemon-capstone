import { RouterProvider } from "react-router-dom";

import router from "./router";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  once: true,
});

function App() {
  return <RouterProvider router={router} />;
}

export default App;
