import * as React from "react";

import "./App.css";
import { authProvider } from "./auth";
import { Outlet, redirect } from "react-router-dom";
import Header from "./components/Header";

export async function loader({ request }: { request: Request }) {
  if (!authProvider.isAuthenticated) {
    const params = new URLSearchParams();
    params.set("from", new URL(request.url).pathname);
    return redirect("/login?" + params.toString());
  }
  return null;
}
// Obtener los boards

// Falta un action para crear una nota

function App() {
  return (
    <div className=" flex h-screen flex-col ">
      <div className="mx-auto flex w-full max-w-[1440px] flex-grow flex-col">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
