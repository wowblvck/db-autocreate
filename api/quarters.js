import { Path, URL } from "../config/server.js";

const addQuarter = async (data) => {
  const postResponse = await fetch(`${URL}/${Path.Quarters}`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return await postResponse.json();
}

const getQuarters = async() => {
  const postResponse = await fetch(`${URL}/${Path.Quarters}`);
  return await postResponse.json();
}

export { addQuarter, getQuarters };