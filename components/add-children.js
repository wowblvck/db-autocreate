import { Path, URL } from "../config/server.js";
import { generateChildrenNameM, generateChildrenNameF, generateRandomAdress, generateBirthday } from "../utils/person-generator.js";
import generateProfilePic from "../utils/picture-generator.js";
import { addChildren, getParents } from "../api/children.js";
import { getClasses } from "../api/class.js";

const createChildren = async () => {
  const parents = await getParents();
  if (!parents.length) {
    return console.log(`Befor creating childrens create a users!`);
  }
  const classes = await getClasses();
  if (!classes.length) {
    return console.log(`Befor creating childrens create a classes!`);
  }
  const classesID = classes.map((el) => el.id);
  parents.forEach(async (parent) => {
    const children = await addChildren({
      firstName: parent.gender === "male" ? generateChildrenNameM() : generateChildrenNameF(),
      lastName: parent.lastName,
      classId:  classesID[Math.floor(Math.random() * classesID.length)],
      parentId: parent.id,
      gender: parent.gender,
      adress: generateRandomAdress(),
      birthday: generateBirthday(),
    });
    await generateProfilePic(children.id, children.gender, `${URL}/${Path.ChildrenPic}`);
  });
}

// createChildren();

export default createChildren;