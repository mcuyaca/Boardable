import "./App.css";
import { authProvider } from "./auth";
import { Outlet, redirect } from "react-router-dom";
import Header from "./components/Header";
import { createBoard, getBoards } from "./services/boards";

export async function loader({ request }: { request: Request }) {
  if (!authProvider.isAuthenticated) {
    const params = new URLSearchParams();
    params.set("from", new URL(request.url).pathname);
    return redirect("/login?" + params.toString());
  }

  const [boards] = await Promise.all([getBoards()]);
  return { boards };
}

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const boardData = Object.fromEntries(formData.entries());
  console.log(boardData);
  try {
    await createBoard(boardData);
    return redirect("/");
  } catch (error) {
    return { error: error.message };
  }
}

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
