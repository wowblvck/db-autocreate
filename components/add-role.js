import { Path, URL } from "../config/server.js";
import dbRoles from "../db/roles.js";

const getRolesFromDB = async (value) => {
  const response = await fetch(`${URL}/${Path.Roles}/${value}`);
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

const createRole = async () => {
  return Promise.all(dbRoles.map(async (el) => {
    const data = await getRolesFromDB(el.value);
    if (data) {
      return console.log(`Role '${el.value}' already exits in database`);
    } else {
      return addRoleInDB(el).then(() => {
        return console.log(`Role '${el.value}' successfuly added in database`);
      });
    }
  }));
}

export default createRole;