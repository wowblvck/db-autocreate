import { Path, URL } from "../config/server.js";
import store from "../components/store.js";

const getParents = async () => {
  const response = await fetch(`${URL}/${Path.Parents}`, {
    headers: {
      Authorization: `Bearer ${store.Token}`
    }
  });
  return await response.json();
}

const addChildren = async (data) => {
  const response = await fetch(`${URL}/${Path.Childrens}`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${store.Token}`
    },
    body: JSON.stringify(data)
  });
  return await response.json();
}

export { getParents, addChildren };