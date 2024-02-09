import * as React from "react";
import { Input } from "../components/Input";
import BoardMenu from "../components/BoardMenu";
import TaskList from "../components/TaskList";
import { Button } from "../components/Button";
import { authProvider } from "../auth";
import { redirect } from "react-router-dom";
import { getLists } from "../services/lists";
import { getTasks } from "../services/tasks";

async function loader({ request }) {
  if (!authProvider.isAuthenticated) {
    const params = new URLSearchParams();
    params.set("from", new URL(request.url).pathname);
    return redirect("/login?" + params.toString());
  }

  const path = window.location.pathname;
  const boardId = path.split("/")[2];
  console.log(boardId);
  const [lists, tasks] = await Promise.all([getLists(), getTasks()]);
  console.log({ lists, tasks });

  return { lists, tasks };
}

const example = [
  {
    title: "To Do",
    tasks: ["Mi Primera tarjeta"],
  },

  {
    title: "Doing",
    tasks: ["Otra tarjeta", "Mi Primera tarjeta"],
  },

  {
    title: "To Do",
    tasks: ["Otra tarjeta más"],
  },
];

function BoardCanvas() {
  return (
    <section className="flex max-h-full flex-grow flex-col gap-4 bg-color2 px-20 pt-4">
      <div className="flex items-center gap-4 ">
        <h2 className="flex text-2xl font-bold">My Board title</h2>
        <BoardMenu />
      </div>

      <section className="flex flex-wrap gap-8 pt-4">
        {example.map((element, index) => {
          return <TaskList key={index} data={element} />;
        })}

        <div className="flex h-fit w-[280px] flex-col gap-2 rounded-md bg-muted p-2 ">
          <div className="flex w-full flex-col gap-2">
            <label className="text-sm" htmlFor="">
              Card Title
            </label>
            <Input type="text" />
            <div className="flex gap-2">
              <Button buttonText="Create new List" />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default BoardCanvas;

BoardCanvas.loader = loader;
