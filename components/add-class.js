import { getClassByName, addClass } from "../api/class.js";
import { getTeachers } from "../api/teacher.js";
import { MAX_TEACHERS } from "../config/params.js";
import generateClassName from "../utils/class-name-generator.js";

const createClass = async () => {
  const teachers = await getTeachers();
  if (!teachers) {
    return console.log("Before create class create a teacher");
  }
  for(let teacher of teachers) {
    let randomClassName = generateClassName(MAX_TEACHERS);
    let classN = await getClassByName(randomClassName);

    while (randomClassName === classN.className) {
      randomClassName = generateClassName(MAX_TEACHERS);
      classN = await getClassByName(randomClassName);
    }
    await addClass({
      className: randomClassName,
      classTeacherId: teacher.id
    });
  }
}

export default createClass;