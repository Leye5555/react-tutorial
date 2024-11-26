import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import "./index.scss";

import { RouterProvider } from "react-router-dom";
import router from "./pages/index";
import GlobalContextProvider from "./services/context/index";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalContextProvider>
      <RouterProvider router={router} />
      <Toaster />
    </GlobalContextProvider>
  </StrictMode>
);
