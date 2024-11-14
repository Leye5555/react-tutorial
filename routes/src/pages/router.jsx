import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import Test from "./Test";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },

  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/test",
    element: <Test />,
  },
]);

export default router;
