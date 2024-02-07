import { createBrowserRouter } from "react-router-dom";
import Login from "./routes/Login";
import UserBoards from "./routes/UserBoards";
import BoardCanvas from "./routes/BoardCanvas";
import Signup from "./routes/Signup";
import Account from "./routes/Account";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <BoardCanvas />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/account",
    element: <Account />,
  },
  {
    path: "/boards",
    element: <UserBoards />,
  },
]);
