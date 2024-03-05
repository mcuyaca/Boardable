import { redirect } from "react-router-dom";
import { authProvider } from "../auth";
import { URL_BASE } from "../constants";

type Board = {
  title: string;
  color?: string;
};

export async function getLists() {
  const token = authProvider.token;

  const url = `${URL_BASE}/list`;
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

export async function createList(listData: Record<string, string | number>) {
  const url = `${URL_BASE}/list`;
  const token = authProvider.token;

  const options = {
    method: "POST",
    body: JSON.stringify(listData),
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

export async function deleteList(listId: number) {
  const url = `${URL_BASE}/list/${listId}`;
  const token = authProvider.token;

  const options = {
    method: "DELETE",
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

export async function editBoard(boardData: Board, boardId: string) {
  const url = `${URL_BASE}/list/${boardId}`;
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
