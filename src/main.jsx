import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Home.jsx";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./Routers/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
