import { redirect } from "react-router-dom";
import { deleteTask } from "../services/tasks";

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const taskData = Object.fromEntries(formData.entries()) as unknown as Task;
  const path = window.location.pathname;

  interface Task {
    content: string;
    listId: number;
  }

  try {
    await deleteTask(taskData);
    return redirect(path);
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    }
  }
}
