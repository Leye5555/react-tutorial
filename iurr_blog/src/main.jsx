import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";

import { RouterProvider } from "react-router-dom";
import router from "./pages/index";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
