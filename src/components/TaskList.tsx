import * as React from "react";
import threeDot from "../assets/images/tree-dot.svg";
import BoardMenu from "./BoardMenu";

const data = {
  title: "Doing",
  tasks: ["Otra tarjeta", "Mi Primera tarjeta"],
};

function TaskList() {
  return (
    <div className="bg-muted flex h-fit w-[280px] flex-col gap-2 rounded-md p-2">
      <div className=" flex items-center justify-between px-4">
        <h3 className="text-lg font-semibold">{data.title}</h3>
        <img className="h-2 w-4" src={threeDot} alt="" />
      </div>

      {data.tasks.map((element) => {
        return (
          <div className=" flex items-center justify-between rounded-md bg-background p-2 shadow-menu">
            <p className="">{element} </p>
            <div className="relative flex items-center justify-center">
              <img className="h-2 w-4" src={threeDot} alt="" />
              {false && <BoardMenu />}
            </div>
          </div>
        );
      })}

      <div>
        <p className="pl-2 font-semibold text-muted-foreground">+ Add a card</p>
      </div>
    </div>
  );
}

export default TaskList;
