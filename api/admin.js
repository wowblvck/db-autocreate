import { Path, URL } from "../config/server.js";

const adminLogin = async (data) => {
  const response = await fetch(`${URL}/${Path.Login}`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });
  return await response.json();
}

export default adminLogin;