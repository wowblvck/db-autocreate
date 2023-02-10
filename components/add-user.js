import { generatePerson, generateRandomName } from "../utils/randomPerson.js";
import { Path, URL } from "../config/server.js";
import { MAX_USERS, FILENAME, MAX_CLASSES } from "../config/params.js";
import createClass from "./add-class.js";
import fs from 'fs';
import randomNumberGenerator from "../utils/randomNumber.js";
import store from "./store.js";
import generateProfilePic from "../utils/userPic.js";

let classLetter = ["А", "Б", "В", "Г", "Д"];
let randomIndex = Math.floor(Math.random() * classLetter.length);
let randomLetter = classLetter[randomIndex];

const generateRandom = randomNumberGenerator(MAX_CLASSES);

const addUserInDB = async (data) => {
  await fetch(`${URL}/${Path.Register}`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });
  return true;
}

const createUserTeacher = async(data) => {
  await fetch(`${URL}/${Path.RoleUpdate}`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });
  return true;
}

const createUser = async () => {
  let resultFile = [];
  for(let i = 1; i <= MAX_USERS; i++) {
    const randomName = generateRandomName();
    const lastName = randomName.lastName;
    const firstName = randomName.firstName;
    const person = generatePerson(firstName, lastName);
    await addUserInDB(person);
    store.objects.push({
      id: i,
      gender: randomName.gender
    });
    console.log(`Person '${firstName} ${lastName}' added in database`);
    await generateProfilePic(i, randomName.gender, `${URL}/${Path.UserPic}`);
    if (i % MAX_CLASSES === 0) {
      await createUserTeacher({
          value: "teacher",
          userId: i
      });
      console.log(`Role for '${firstName} ${lastName}' set a 'teacher'`);
      await createClass({
        className: `${generateRandom()}${randomLetter}`,
        classTeacherId: i
      });
      console.log(`Class created`);
    }
    resultFile.push(person);
  }
  fs.writeFile(FILENAME, JSON.stringify(resultFile), (err) => {
    if (err) throw err;
    console.log("The file with 'users' data has been saved!");
  });
}

export default createUser;