import * as React from "react";

import BoardMenu from "./BoardMenu";
import NewCard from "./NewCard";

const example = {
  title: "Doing",
  tasks: ["Otra tarjeta", "Mi Primera tarjeta"],
};

interface Props {
  data: { title: string; tasks: string[] };
}

function TaskList({ data = example }: Props) {
  return (
    <div className="flex h-fit w-[280px] flex-col gap-2 rounded-md bg-muted p-2">
      <div className=" flex items-center justify-between px-4">
        <h3 className="text-lg font-semibold">{data.title}</h3>
        <BoardMenu />
      </div>

      {data.tasks.map((element, index) => {
        return (
          <div
            key={index}
            className=" flex items-center justify-between rounded-md bg-background p-2 shadow-menu"
          >
            <p className="">{element} </p>
            <BoardMenu />
          </div>
        );
      })}

      <NewCard />
    </div>
  );
}

export default TaskList;
