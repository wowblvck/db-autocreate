import { Path, URL } from "../config/server.js";
import store from "../components/store.js";

const createSubject = async(data) => {
  const response = await fetch(`${URL}/${Path.Subjects}`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${store.Token}`
    },
    body: JSON.stringify(data)
  });
  return await response.json();
}

const getSubjectByChildren = async (classid, childrenid) => {
  const response = await fetch(`${URL}/${Path.Subjects}?class=${classid}&childrenid=${childrenid}`, {
    headers: {
      Authorization: `Bearer ${store.Token}`
    }
  });
  return await response.json();
}

export { createSubject, getSubjectByChildren };