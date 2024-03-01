import { redirect } from "react-router-dom";
import { authProvider } from "../auth";
import { URL_BASE } from "../constants";

export async function getTasks() {
  const token = authProvider.token;

  const url = `${URL_BASE}/task`;
  const options = {
    headers: {
      Authorization: `bearer ${token}`,
    },
  };

  const response = await fetch(url, options);

  if (response.ok) {
    const body = await response.json();
    return body.data;
  }

  if (response.status === 401) {
    authProvider.logout();
    throw redirect("/login");
  }

  const body = await response.json();
  return Promise.reject(new Error(body.error));
}

interface Task {
  content: string;
  listId: number;
}

export async function createTask(boardData: Task) {
  const url = `${URL_BASE}/task`;
  const token = authProvider.token;

  const options = {
    method: "POST",
    body: JSON.stringify(boardData),
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${token}`,
    },
  };

  const response = await fetch(url, options);

  if (response.ok) {
    const body = await response.json();
    return body.data;
  }

  if (response.status === 401) {
    authProvider.logout();
    throw redirect("/login");
  }

  const body = await response.json();
  return Promise.reject(new Error(body.error));
}

export async function editTask(boardData: any) {
  const url = `${URL_BASE}/task`;
  const token = authProvider.token;

  const options = {
    method: "PATCH",
    body: JSON.stringify(boardData),
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${token}`,
    },
  };

  const response = await fetch(url, options);

  if (response.ok) {
    console.log(response);
    const body = await response.json();
    console.log(body.data);
    return body.data;
  }

  if (response.status === 401) {
    authProvider.logout();
    throw redirect("/login");
  }

  const body = await response.json();

  return Promise.reject(new Error(body.error));
}

export async function deleteTask(boardData: Task) {
  const url = `${URL_BASE}/task`;
  const token = authProvider.token;

  const options = {
    method: "DELETE",
    body: JSON.stringify(boardData),
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${token}`,
    },
  };

  const response = await fetch(url, options);

  if (response.ok) {
    const body = await response.json();
    return body.data;
  }

  if (response.status === 401) {
    authProvider.logout();
    throw redirect("/login");
  }

  const body = await response.json();
  return Promise.reject(new Error(body.error));
}
