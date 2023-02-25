import { Path, URL } from "../config/server.js";
import store from "../components/store.js";

const addQuarter = async (data) => {
  const postResponse = await fetch(`${URL}/${Path.Quarters}`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${store.Token}`
    },
    body: JSON.stringify(data),
  });
  return await postResponse.json();
}

const getQuarters = async() => {
  const postResponse = await fetch(`${URL}/${Path.Quarters}`, {
    headers: {
      Authorization: `Bearer ${store.Token}`
    }
  });
  return await postResponse.json();
}

export { addQuarter, getQuarters };