import createChildren from "./components/add-children.js";
import createRole from "./components/add-role.js";
import createUser from "./components/add-user.js";

const run = async () => {
  await Promise.all([createRole()])
  .then(() => {
    createUser().then(() => {
      createChildren()
    });
  });
}

run();
