import { Path, URL } from "../config/server.js";
import store from "../components/store.js";

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
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${store.Token}`
    }
  });
  return await response.json();
}

const roleUpdate = async(data) => {
  await fetch(`${URL}/${Path.RoleUpdate}`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${store.Token}`
    },
    body: JSON.stringify(data)
  });
  return true;
}

export { getRoles, addRoleInDB, roleUpdate }