import { getChildrens } from "../api/children.js";
import { getSubjectByChildren } from "../api/subjects.js";
import addGrade from "../api/grade.js";
import moment from "moment";

const createGrade = async () => {
  const childrens = await getChildrens();

  for(const children of childrens) {
    const subjects = await getSubjectByChildren(children.classId, children.id);
    for(const subject of subjects) {
      const subjectDate = subject.date;
      const currentDate = moment();
      if(moment(subjectDate).isBefore(currentDate)) {
        let random = Math.random();
        if (random < 0.5) {
          const grade = Math.floor(Math.random() * 4) + 2;
          const data = { value: grade, childrenId: children.id, subjectId: subject.id };
          await addGrade(data);
        }
      }
    }
  }
}

export default createGrade;
