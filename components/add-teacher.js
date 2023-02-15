import { generatePerson, generateRandomName } from "../utils/person-generator.js";
import { Path, URL } from "../config/server.js";
import { MAX_TEACHERS, FILENAME_TEACHERS} from "../config/params.js";
import { createFile } from "../utils/files.js";
import generateProfilePic from "../utils/picture-generator.js";
import { getRoles } from "../api/role.js";
import parseJwt from "../utils/token-parser.js";
import addUser from "../api/users.js";
import { createUserTeacher } from "../api/teacher.js";


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
    await createUserTeacher({
      value: "teacher",
      userId: userParse.id
    })
    promises.push(await generateProfilePic(userParse.id, randomName.gender, `${URL}/${Path.UserPic}`));
    resultFile.push(person);
  }
  await Promise.all([promises]).then(() => {
    createFile(resultFile, FILENAME_TEACHERS);
  })
}

export default createTeacher;