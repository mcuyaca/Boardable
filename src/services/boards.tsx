import { redirect } from "react-router-dom";
import { authProvider } from "../auth";
import { URL_BASE } from "../constants";

export async function getBoards() {
  const token = authProvider.token;

  const url = `${URL_BASE}/board`;
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

type Board = {
  title: string;
  color?: string;
};

export async function createBoard(boardData: Board) {
  const url = `${URL_BASE}/board`;
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

export async function deleteBoard(boardId: string) {
  const url = `${URL_BASE}/board/${boardId}`;
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
  const url = `${URL_BASE}/board/${boardId}`;
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
