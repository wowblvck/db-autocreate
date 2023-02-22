import { Path, URL } from "../config/server.js";

const addInfo = async (data) => {
  const response = await fetch(`${URL}/${Path.Info}`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });
  if (!response.ok) {
    return console.log(`Something wrong where createing info!`);
  }
  return await response.json();
}

export default addInfo;