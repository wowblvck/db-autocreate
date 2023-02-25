import { generatePerson, generateRandomName } from "../utils/person-generator.js";
import { Path, URL } from "../config/server.js";
import { MAX_TEACHERS, FILENAME_TEACHERS} from "../config/params.js";
import { createFile } from "../utils/files.js";
import editProfile from "../utils/edit-profile.js";
import { getRoles } from "../api/role.js";
import parseJwt from "../utils/token-parser.js";
import addUser from "../api/users.js";
import { roleUpdate } from "../api/role.js";
import { generatePhone } from "../utils/person-generator.js";


const createTeacher = async () => {
  const roles = await getRoles();
  if (!roles) {
    return console.log("Before create teacher create a roles");
  }
  let resultFile = [];
  const promises = [];
  for(let i = 0; i < MAX_TEACHERS; i++) {
    const randomName = generateRandomName();
    const lastName = randomName.lastName;
    const firstName = randomName.firstName;
    const person = generatePerson(firstName, lastName, randomName.gender);
    const user = await addUser(person);
    promises.push(user);
    const userParse = parseJwt(user.token);
    await roleUpdate({
      value: "teacher",
      userId: userParse.id
    })
    const phone = generatePhone();
    promises.push(await editProfile(userParse.id, randomName.gender, `${URL}/${Path.UserPic}`, phone));
    resultFile.push(person);
  }
  await Promise.all([promises]).then(() => {
    createFile(resultFile, FILENAME_TEACHERS);
  })
}

export default createTeacher;