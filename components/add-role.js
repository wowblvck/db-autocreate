import dbRoles from "../db/roles.js";
import { addRoleInDB } from "../api/role.js";

const createRole = async () => {
  dbRoles.map(async (el) => {
    await addRoleInDB(el);
  });
}

export default createRole;