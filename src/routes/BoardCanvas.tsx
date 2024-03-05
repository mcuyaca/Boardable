import BoardMenu from "../components/BoardMenu";
import TaskList from "../components/TaskList";
import { authProvider } from "../auth";
import { Form, redirect, useRouteLoaderData } from "react-router-dom";
import { createList, deleteList, getLists } from "../services/lists";
import { createTask, deleteTask, editTask, getTasks } from "../services/tasks";
import { deleteBoard, editBoard, getBoards } from "../services/boards";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

async function loader({ request, params }: { request: Request; params: any }) {
  if (!authProvider.isAuthenticated) {
    const searchParams = new URLSearchParams();
    searchParams.set("from", new URL(request.url).pathname);
    return redirect("/login?" + searchParams.toString());
  }

  const [lists, tasks, boards] = await Promise.all([
    getLists(),
    getTasks(),
    getBoards(),
  ]);

  const boardId = params.boardid;
  const board = boards.filter((board: any) => board.id == boardId)[0];

  console.log(boards);
  return { lists, tasks, boardId, board };
}

interface Task {
  content: string;
  listId: number;
  taskId?: string;
  title?: string;
}

async function action({ request, params }: { request: Request; params: any }) {
  const formData = await request.formData();
  const taskData = Object.fromEntries(formData.entries()) as unknown as Task;

  const intent = formData.get("intent");
  const boardId = params.boardid;
  if (intent === "board") {
    if (request.method === "DELETE") {
      try {
        await deleteBoard(boardId);
        return redirect("/");
      } catch (error) {
        if (error instanceof Error) {
          return { error: error.message };
        }
      }
    }
    if (request.method === "PATCH") {
      try {
        const newTitle = prompt();
        const data = { title: newTitle! };
        await editBoard(data, boardId);
        return {};
      } catch (error) {
        if (error instanceof Error) {
          return { error: error.message };
        }
      }
    }
    return {};
  }

  if (intent === "list") {
    if (request.method === "POST") {
      try {
        const newList = {
          boardId: Number(boardId),
          title: taskData.title!,
        };
        await createList(newList);
        return {};
      } catch (error) {
        if (error instanceof Error) {
          return { error: error.message };
        }
      }
    }
    if (request.method === "DELETE") {
      try {
        await deleteList(taskData.listId);
      } catch (error) {
        if (error instanceof Error) {
          return { error: error.message };
        }
      }
    }
    return {};
  }

  if (intent === "task") {
    if (request.method === "POST") {
      try {
        await createTask(taskData, boardId);
        return {};
      } catch (error) {
        if (error instanceof Error) {
          return { error: error.message };
        }
      }
    }

    if (request.method === "PATCH") {
      const newTask = prompt("Escriba el nuevo mensaje");
      const newBody = {
        content: newTask,
        id: taskData.taskId,
      };
      try {
        editTask(newBody);
      } catch (error) {
        if (error instanceof Error) {
          return { error: error.message };
        }
      }
      return {};
    }

    if (request.method === "DELETE") {
      try {
        await deleteTask(taskData);
      } catch (error) {
        if (error instanceof Error) {
          return { error: error.message };
        }
      }
    }
    return {};
  }
}

interface BoardData {
  boardId: string;
  lists: { [k: string]: string | number }[];
  tasks: { [k: string]: string | number }[];
  board: { [k: string]: string | number }[];
}

function BoardCanvas() {
  const boardData = useRouteLoaderData("canvas") as BoardData;
  const filterList = boardData.lists.filter(
    (item) => item.boardid == boardData.boardId,
  );
  const board: any = boardData.board;
  console.log(boardData);
  return (
    <section
      style={{ backgroundColor: board.color }}
      className="flex max-h-full flex-grow flex-col gap-4 bg-color2 px-20 pt-4"
    >
      <div className="flex items-center gap-4 ">
        <h2 className="flex text-2xl font-bold">{board.title}</h2>
        <BoardMenu />
      </div>

      <section className="flex flex-wrap gap-8 pt-4">
        {filterList.map((element, index) => {
          return (
            <TaskList key={index} data={element} tasks={boardData.tasks} />
          );
        })}

        <div className="flex h-fit w-[280px] flex-col gap-2 rounded-md bg-muted p-2 ">
          <Form method="POST" className="flex w-full flex-col gap-2">
            <label className="text-sm" htmlFor="">
              Card Title
            </label>

            <Input name="title" type="text" />
            <div className="flex gap-2">
              <Button
                type="submit"
                name="intent"
                value="list"
                buttonText="Create new List"
              />
            </div>
          </Form>
        </div>
      </section>
    </section>
  );
}

export default BoardCanvas;

BoardCanvas.loader = loader;
BoardCanvas.action = action;
