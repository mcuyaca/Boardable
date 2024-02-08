import * as React from "react";
import Header from "../components/Header";

interface Props {
  children: React.ReactNode;
}

function UserLayout({ children }: Props) {
  return (
    <div className=" flex h-screen flex-col ">
      <div className="mx-auto flex w-full max-w-[1440px] flex-grow flex-col">
        <Header />
        {children}
      </div>
    </div>
  );
}

export default UserLayout;
