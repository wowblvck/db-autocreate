import { Path, URL } from "../config/server.js";
import store from "../components/store.js";

const addInfo = async (data) => {
  const response = await fetch(`${URL}/${Path.Info}`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${store.Token}`
    },
    body: JSON.stringify(data)
  });
  if (!response.ok) {
    return console.log(`Something wrong where creating info!`);
  }
  return await response.json();
}

export default addInfo;