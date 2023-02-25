import { Path, URL } from "../config/server.js";
import store from "../components/store.js";

const getTeachers = async () => {
  const response = await fetch(`${URL}/${Path.Teachers}`, {
    headers: {
      Authorization: `Bearer ${store.Token}`
    }
  });
  return await response.json();
}

export { getTeachers };