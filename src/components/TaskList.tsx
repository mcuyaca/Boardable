import * as React from "react";
import NewCard from "./NewCard";
import TaskMenu from "./TaskMenu";
import ListMenu from "./ListMenu";

interface Props {
  data: { [k: string]: string | number };
  tasks: { [k: string]: string | number }[];
}

function TaskList({ data, tasks }: Props) {
  const [activeTask, setActiveTask] = React.useState<string | null>(null);
  function handleMenuToggle(menuId: string) {
    setActiveTask((prevId) => (prevId === menuId ? null : menuId));
  }
  return (
    <div className="flex h-fit w-[280px] flex-col gap-2 rounded-md bg-muted p-2">
      <div className=" flex items-center justify-between px-4">
        <h3 className="text-lg font-semibold">{data.title}</h3>
        <ListMenu listId={data.id.toString()} />
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
              <TaskMenu
                taskId={task.id.toString()}
                isActive={activeTask === task.id.toString()}
                onToggle={() => handleMenuToggle(task.id.toString())}
              />
            </div>
          );
      })}

      <NewCard listId={data.id} />
    </div>
  );
}

export default TaskList;
