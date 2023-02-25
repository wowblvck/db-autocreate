import { Path, URL } from "../config/server.js";
import store from "../components/store.js";

const getClassByName = async (name) => {
  const response = await fetch(`${URL}/${Path.Class}?name=${name}`, {
    headers: {
      Authorization: `Bearer ${store.Token}`
    }
  });
  return await response.json();
}

const getClasses = async () => {
  const response = await fetch(`${URL}/${Path.Class}`, {
    headers: {
      Authorization: `Bearer ${store.Token}`
    }
  });
  return await response.json();
}

const addClass = async (data) => {
  const response = await fetch(`${URL}/${Path.Class}`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${store.Token}`
    },
    body: JSON.stringify(data)
  });
  if (!response.ok) {
    return console.log(`The record is already in the database`);
  }
  return await response.json();
}

export { addClass, getClassByName, getClasses };