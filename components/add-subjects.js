import { getClasses } from "../api/class.js";
import { getQuarters } from "../api/quarters.js";
import subjects from "../db/subjects.js";
import { FILENAME_SUBJECTS } from "../config/params.js";
import { createFileSubject } from "../utils/files.js";
import createSubject from "../api/subjects.js";
import moment from "moment";

const createSubjects = async () => {
  const quarters = await getQuarters();
  const classes = await getClasses();

  const allItems = [];
  const promises = [];

  for (const quarter of quarters) {
    for (const clazz of classes) {
      for (let date = moment(quarter.startDate); date <= moment(quarter.endDate); date.add(1, 'day')) {
        if (date.day() === 6 || date.day() === 0) {
          continue;
        }

        const numSubjects = Math.floor(Math.random() * 2) + 2;
        const subjectsItems = pickRandom(subjects, numSubjects);

        let startTime = moment({ year: date.year(), month: date.month(), date: date.date(), hour: 8, minute: 30 });
        let endTime = moment(startTime).add(45, 'minutes');
        
        for (const subject of subjectsItems) {
          const item = {
            name: subject.name,
            homework: subject.homework[Math.floor(Math.random() * subject.homework.length)],
            classId: clazz.id,
            date: formatDateTime(startTime),
            quarter: quarter.quarter,
          };
          const promise = createSubject(item);
          promises.push(promise);
  
          allItems.push(item);
        
          startTime = moment(endTime).add(15, 'minutes');
          endTime = moment(startTime).add(45, 'minutes');

          await promise;
        };
      }
    }
  };
  await Promise.all(promises).then(() => {
    createFileSubject(allItems, FILENAME_SUBJECTS);
  });
}

function pickRandom(arr, num) {
  const shuffled = arr.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}

function formatDateTime(date) {
  return date.format('YYYY-MM-DD HH:mm');
}

export default createSubjects;