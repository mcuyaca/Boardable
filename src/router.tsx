import { createBrowserRouter } from "react-router-dom";
import Login, { action as loginAction } from "./routes/Login";
import BoardCanvas from "./routes/BoardCanvas";
import Signup, { action as signupAction } from "./routes/Signup";
import Account from "./routes/Account";
import App, { loader as rootLoader, action as rootAction } from "./App";
import Boards from "./components/Boards";
import { action as logoutAction } from "./routes/Logout";
import { action as destroyAction } from "./routes/Destroy";

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
        id: "account",
        path: "account",
        element: <Account />,
        loader: Account.loader,
        action: Account.action,
      },
      {
        id: "canvas",
        path: "boards/:boardid",
        element: <BoardCanvas />,
        loader: BoardCanvas.loader,
        action: BoardCanvas.action,
      },
      {
        path: "boards/:boardid/destroy",
        action: destroyAction,
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
