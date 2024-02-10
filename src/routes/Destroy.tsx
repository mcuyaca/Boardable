import { redirect, useNavigate } from "react-router-dom";
import { deleteTask } from "../services/tasks";

export async function action({ request }) {
  const formData = await request.formData();
  const taskData = Object.fromEntries(formData.entries());
  const path = window.location.pathname;

  try {
    await deleteTask(taskData);
    return redirect(path);
  } catch (error) {
    return { error: error.message };
  }
}
