import * as React from "react";
import Header from "../components/Header";

interface Props {
  children: React.ReactNode;
}

function UserLayout({ children }: Props) {
  return (
    <div className=" h-full min-h-screen ">
      <div className=" h-full w-screen max-w-[1440px] ">
        <Header />
        {children}
      </div>
    </div>
  );
}

export default UserLayout;
