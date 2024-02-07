import * as React from "react";

function BoardMenu() {
  return (
    <div className="absolute top-4 flex w-24 flex-col gap-1 rounded-md bg-background  shadow-menu">
      <button className="flex p-2 hover:rounded-t-md hover:bg-outline-active">
        Edit
      </button>
      <button className="flex p-2 hover:rounded-b-md hover:bg-outline-active">
        Delete
      </button>
    </div>
  );
}

export default BoardMenu;
