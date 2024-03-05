import * as React from "react";
import threeDot from "../assets/images/tree-dot.svg";
import { Form } from "react-router-dom";

interface Props {
  listId: string;
}

function ListMenu({ listId }: Props) {
  const [showMenu, setShowMenu] = React.useState(false);

  function handleClick() {
    setShowMenu(!showMenu);
  }

  return (
    <div className="relative flex items-center justify-center">
      <img className="h-2 w-4" src={threeDot} alt="" onClick={handleClick} />
      {showMenu && (
        <div className="absolute top-4 z-10 flex w-24 flex-col gap-1 rounded-md bg-background  shadow-menu">
          <Form method="PATCH" onSubmit={handleClick}>
            <button
              type="submit"
              name="intent"
              value="list"
              className="flex w-full p-2 hover:rounded-t-md hover:bg-outline-active"
            >
              Edit
            </button>
          </Form>

          <Form
            method="DELETE"
            onSubmit={() => {
              confirm("Estas seguro de eliminar esta List");
            }}
          >
            <input type="hidden" name="listId" id="listId" value={listId} />
            <button
              type="submit"
              name="intent"
              value="list"
              className="flex w-full p-2 hover:rounded-b-md hover:bg-outline-active"
            >
              Delete
            </button>
          </Form>
        </div>
      )}
    </div>
  );
}

export default ListMenu;
