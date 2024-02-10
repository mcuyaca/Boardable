import * as React from "react";

import BoardMenu from "./BoardMenu";
import NewCard from "./NewCard";

async function action({ request }) {}

interface Props {
  data: { [k: string]: string | number };
  tasks: { [k: string]: string | number }[];
}

function TaskList({ data, tasks }: Props) {
  return (
    <div className="flex h-fit w-[280px] flex-col gap-2 rounded-md bg-muted p-2">
      <div className=" flex items-center justify-between px-4">
        <h3 className="text-lg font-semibold">{data.title} </h3>
        <BoardMenu />
      </div>

      {tasks.map((task, index) => {
        if (task.listid === data.id)
          return (
            <div
              key={index}
              id={task.id.toString()}
              className=" flex items-center justify-between rounded-md bg-background p-2 shadow-menu"
            >
              <p className="">{task.content} </p>
              <BoardMenu taskId={task.id.toString()} />
            </div>
          );
      })}

      <NewCard listId={data.id} />
    </div>
  );
}

export default TaskList;
