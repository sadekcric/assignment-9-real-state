import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Route/Router.jsx";
import "animate.css";
import CommonRoute from "./Route/CommonRoute.jsx";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CommonRoute>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </CommonRoute>
  </React.StrictMode>
);
