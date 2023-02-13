import { Path, URL } from "../config/server.js";

const getParents = async () => {
  const response = await fetch(`${URL}/${Path.Parents}`);
  return await response.json();
}

const addChildren = async (data) => {
  const response = await fetch(`${URL}/${Path.Childrens}`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });
  return await response.json();
}

export { getParents, addChildren };