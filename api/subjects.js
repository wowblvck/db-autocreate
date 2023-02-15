import { Path, URL } from "../config/server.js";

const createSubject = async(data) => {
  const response = await fetch(`${URL}/${Path.Subjects}`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });
  return await response.json();
}

export default createSubject;