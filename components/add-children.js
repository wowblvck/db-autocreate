import { Path, URL } from "../config/server.js";
import { generateChildrenNameM, generateChildrenNameF, generateRandomAdress, generateBirthday } from "../utils/randomPerson.js";
import store from "./store.js";
import generateProfilePic from "../utils/userPic.js";

const getUsersFromDB = async () => {
  const response = await fetch(`${URL}/${Path.Users}`);
  return await response.json();
}

const getClassesIDFromDB = async () => {
  const response = await fetch(`${URL}/${Path.Class}`);
  return await response.json();
}

const addChildren = async (data) => {
  const response = await fetch(`${URL}/${Path.Childrens}`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });
  return await response.json();
}

const createChildren = async () => {
  const users = await getUsersFromDB();
  const classes = await getClassesIDFromDB();
  const classesID = classes.map((el) => el.id);
  users.forEach(async (el, i) => {
    if (el.id === store.objects[i].id) {
      const children = await addChildren({
        firstName: store.objects[i].gender === "male" ? generateChildrenNameM() : generateChildrenNameF(),
        lastName: el.lastName,
        classId:  classesID[Math.floor(Math.random() * classesID.length)],
        parentId: el.id,
        adress: generateRandomAdress(),
        birthday: generateBirthday(),
      });
      console.log(`Create children for user ID - '${el.id}'`);
      generateProfilePic(children.id, store.objects[i].gender, `${URL}/${Path.ChildrenPic}`);
    }
  });
}

export default createChildren;