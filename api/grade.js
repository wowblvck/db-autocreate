import { Path, URL } from "../config/server.js";
import store from "../components/store.js";

const addGrade = async(data) => {
  const response = await fetch(`${URL}/${Path.Grades}`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${store.Token}`
    },
    body: JSON.stringify(data)
  });
  return await response.json();
}

export default addGrade;