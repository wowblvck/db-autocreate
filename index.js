// import createChildren from "./components/add-children.js";
import createRole from "./components/add-role.js";
import createUser from "./components/add-user.js";
import createTeacher from "./components/add-teacher.js";
import createNews from "./components/add-news.js";
import createClass from "./components/add-class.js";
import createChildren from "./components/add-children.js";

const run = async () => {
  await Promise.all([createRole()]).then(() => {
    console.log("All roles will be created!");
    Promise.all([createUser()]).then(() => {
      console.log("All users will be created!");
      Promise.all([createTeacher()]).then(() => {
        console.log("All teachers will be created!");
        Promise.all([createClass()]).then(() => {
          console.log("All classes will be created!");
          Promise.all([createChildren()]).then(() => {
            console.log("All childrens will be created!");
          })
        })
      })
    })
  })
  await Promise.all([createNews()]).then(() => {
    console.log("All news will be created!");
  })
}

run();
