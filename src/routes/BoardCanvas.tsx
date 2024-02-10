import BoardMenu from "../components/BoardMenu";
import TaskList from "../components/TaskList";
import { authProvider } from "../auth";
import { redirect, useRouteLoaderData } from "react-router-dom";
import { getLists } from "../services/lists";
import { createTask, getTasks } from "../services/tasks";

async function loader({ request, params }) {
  if (!authProvider.isAuthenticated) {
    const params = new URLSearchParams();
    params.set("from", new URL(request.url).pathname);
    return redirect("/login?" + params.toString());
  }

  const [lists, tasks] = await Promise.all([getLists(), getTasks()]);
  const boardId = params.boardid;

  return { lists, tasks, boardId };
}

async function action({ request, params }) {
  const formData = await request.formData();
  const taskData = Object.fromEntries(formData.entries());

  console.log(taskData);
  try {
    await createTask(taskData);
    return {};
  } catch (error) {
    return { error: error.message };
  }
}

interface BoardData {
  boardId: string;
  lists: { [k: string]: string | number }[];
  tasks: { [k: string]: string | number }[];
}

function BoardCanvas() {
  const boardData = useRouteLoaderData("canvas") as BoardData;
  const filterList = boardData.lists.filter(
    (item) => item.boardid == boardData.boardId,
  );

  console.log(boardData);
  return (
    <section className="flex max-h-full flex-grow flex-col gap-4 bg-color2 px-20 pt-4">
      <div className="flex items-center gap-4 ">
        <h2 className="flex text-2xl font-bold">My Board title </h2>

        <BoardMenu />
      </div>

      <section className="flex flex-wrap gap-8 pt-4">
        {filterList.map((element, index) => {
          return (
            <TaskList key={index} data={element} tasks={boardData.tasks} />
          );
        })}

        {/* <div className="flex h-fit w-[280px] flex-col gap-2 rounded-md bg-muted p-2 ">
          <div className="flex w-full flex-col gap-2">
            <label className="text-sm" htmlFor="">
              Card Title 
            </label>
            <Input type="text" />
            <div className="flex gap-2">
              <Button buttonText="Create new List" />
            </div>
          </div>
        </div> */}
      </section>
    </section>
  );
}

export default BoardCanvas;

BoardCanvas.loader = loader;
BoardCanvas.action = action;
