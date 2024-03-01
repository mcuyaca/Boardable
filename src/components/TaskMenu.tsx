import threeDot from "../assets/images/tree-dot.svg";
import { Form } from "react-router-dom";

interface Props {
  taskId: string;
  isActive: boolean;
  onToggle: () => void;
}
function TaskMenu({ taskId, isActive, onToggle }: Props) {
  function handleClick() {
    onToggle();
  }

  return (
    <div className="relative flex items-center justify-center">
      <img className="h-2 w-4" src={threeDot} alt="" onClick={handleClick} />
      {isActive && (
        <div className="absolute top-4 z-10 flex w-24 flex-col gap-1 rounded-md bg-background  shadow-menu">
          <Form className="grid" method="PATCH">
            <button
              type="submit"
              name="intent"
              value="task"
              className="flex p-2 hover:rounded-t-md hover:bg-outline-active"
            >
              Edit
            </button>
            <input type="hidden" name="taskId" id="taskId" value={taskId} />
          </Form>

          <Form
            className="grid"
            method="DELETE"
            onSubmit={(event) => {
              if (!confirm("Estas seguro de eliminar esta tarea")) {
                event?.preventDefault();
              }
            }}
          >
            <input type="hidden" name="taskId" id="taskId" value={taskId} />
            <button
              type="submit"
              name="intent"
              value="task"
              className="flex p-2 hover:rounded-b-md hover:bg-outline-active"
            >
              Delete
            </button>
          </Form>
        </div>
      )}
    </div>
  );
}

export default TaskMenu;
