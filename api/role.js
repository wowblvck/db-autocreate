import { Path, URL } from "../config/server.js";

const getRoleByValue = async (value) => {
  const response = await fetch(`${URL}/${Path.Roles}/${value}`);
  const data = await response.json();
  if (data.statusCode === 404) {
    return false;
  } else {
    return true;
  }
}

const getRoles = async () => {
  const response = await fetch(`${URL}/${Path.Roles}`);
  const data = await response.json();
  if (data.statusCode === 404) {
    return false;
  } else {
    return true;
  }
}

const addRoleInDB = async (data) => {
  const response = await fetch(`${URL}/${Path.Roles}`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });
  return await response.json();
}

export { getRoleByValue, getRoles, addRoleInDB }