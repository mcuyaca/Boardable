import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./routes/Login";

import "@fontsource-variable/familjen-grotesk";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <div> login</div>,
  },
  {
    path: "/signup",
    element: <div> signup</div>,
  },
  {
    path: "/account",
    element: <div> signup</div>,
  },
  {
    path: "/boards",
    element: <div> signup</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
