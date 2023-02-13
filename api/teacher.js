import { Path, URL } from "../config/server.js";

const getTeachers = async () => {
  const response = await fetch(`${URL}/${Path.Teachers}`);
  return await response.json();
}

const createUserTeacher = async(data) => {
  await fetch(`${URL}/${Path.RoleUpdate}`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });
  return true;
}

export { createUserTeacher, getTeachers };