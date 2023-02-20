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
        
          startTime.add(60, 'minutes');

          await promise;
        };
      }
    }
  };
  await Promise.all(promises).then(() => {
    createFileSubject(allItems, FILENAME_SUBJECTS);
  });
}

function pickRandom(array, numItems) {
  const result = [];

  for (let i = 0; i < numItems; i++) {
    const randomIndex = Math.floor(Math.random() * array.length);
    result.push(array[randomIndex]);
  }

  return result;
}

function formatDateTime(date) {
  return date.format('YYYY-MM-DD HH:mm');
}

// createSubjects();

export default createSubjects;