import dbRoles from "../db/roles.js";
import { getRoleByValue, addRoleInDB } from "../api/role.js";

const createRole = async () => {
  return Promise.all(dbRoles.map(async (el) => {
    const data = await getRoleByValue(el.value);
    if (data) {
      return console.log(`Role '${el.value}' already exits in database`);
    } else {
      return addRoleInDB(el);
    }
  }));
}

// createRole();

export default createRole;