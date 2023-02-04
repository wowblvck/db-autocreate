import createChildren from "./components/add-children.js";
import createRole from "./components/add-role.js";
import createUser from "./components/add-user.js";
import createNews from "./components/add-news.js";

const run = async () => {
  await Promise.all([createRole()])
  .then(() => {
    createUser().then(() => {
      createChildren()
    });
  });
  await createNews();
}

run();
