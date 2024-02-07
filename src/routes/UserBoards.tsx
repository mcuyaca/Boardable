import * as React from "react";
import Header from "../components/Header";
import Boards from "../components/Boards";
import UserLayout from "../layout/UserLayout";

function UserBoards() {
  return (
    <UserLayout>
      <Boards />
    </UserLayout>
  );
}

export default UserBoards;
