import { createBrowserRouter } from "react-router-dom";
import Login, { action as loginAction } from "./routes/Login";
import BoardCanvas from "./routes/BoardCanvas";
import Signup from "./routes/Signup";
import Account from "./routes/Account";
import App, { loader as rootLoader } from "./App";
import Boards from "./components/Boards";

export const router = createBrowserRouter([
  {
    id: "app",
    path: "/",
    element: <App />,
    loader: rootLoader,
    children: [
      {
        index: true,
        element: <Boards />,
      },
      {
        path: "account",
        element: <Account />,
      },
      {
        path: "boards",
        element: <BoardCanvas />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    action: loginAction,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);
