import { Path, URL } from "../config/server.js";

const addUser = async (data) => {
  const response = await fetch(`${URL}/${Path.Register}`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });
  return await response.json();
}

export default addUser;