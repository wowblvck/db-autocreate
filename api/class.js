import { Path, URL } from "../config/server.js";

const getClassByName = async (name) => {
  const response = await fetch(`${URL}/${Path.Class}?name=${name}`);
  const data = await response.json();
  if (data.statusCode === 404) {
    return false;
  }
  return data;
}

const getClasses = async () => {
  const response = await fetch(`${URL}/${Path.Class}`);
  return await response.json();
}

const addClass = async (data) => {
  const response = await fetch(`${URL}/${Path.Class}`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });
  if (!response.ok) {
    return console.log(`The record is already in the database`);
  }
  return await response.json();
}

export { addClass, getClassByName, getClasses };