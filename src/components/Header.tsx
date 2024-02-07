import * as React from "react";
import { Button } from "./Button";
import logoSvg from "../assets/images/Logo.svg";

function Header() {
  return (
    <div className="flex h-24 w-full max-w-[1440px] items-center justify-between bg-background px-20">
      <div className="flex gap-4 text-2xl font-bold">
        <img className="h-9 w-9" src={logoSvg} alt="Boardable Logo" />
        <h1>Boardable</h1>
      </div>
      <div className="flex gap-4">
        <Button variant="outline" className="" buttonText="My Account"></Button>
        <Button variant="secondary" className="" buttonText="Logout"></Button>
      </div>
    </div>
  );
}

export default Header;
