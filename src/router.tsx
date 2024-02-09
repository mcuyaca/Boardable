import { createBrowserRouter } from "react-router-dom";
import Login, { action as loginAction } from "./routes/Login";
import BoardCanvas from "./routes/BoardCanvas";
import Signup, { action as signupAction } from "./routes/Signup";
import Account from "./routes/Account";
import App, { loader as rootLoader, action as rootAction } from "./App";
import Boards from "./components/Boards";
import { action as logoutAction } from "./routes/Logout";

export const router = createBrowserRouter([
  {
    id: "app",
    path: "/",
    element: <App />,
    loader: rootLoader,
    action: rootAction,
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
        path: "boards/:boardid",
        element: <BoardCanvas />,
        loader: BoardCanvas.loader,
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
    action: signupAction,
  },
  {
    path: "/logout",
    action: logoutAction,
  },
]);
