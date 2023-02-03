import { Path, URL } from "../config/server.js";

const addClassInDB = async (data) => {
  const response = await fetch(`${URL}/${Path.Class}`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });
  if (!response.ok) {
    console.log(`The record is already in the database`);
  }
  return await response.json();
}

const createClass = async (data) => {
  await addClassInDB(data);
}

export default createClass;