import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
// import Home from "./Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default router;
