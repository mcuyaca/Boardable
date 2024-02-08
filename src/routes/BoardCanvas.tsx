import * as React from "react";
import { Input } from "../components/Input";
import BoardMenu from "../components/BoardMenu";
import TaskList from "../components/TaskList";
import { Button } from "../components/Button";

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
        {example.map((element) => {
          return <TaskList data={element} />;
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
