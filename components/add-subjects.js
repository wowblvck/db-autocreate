import { getClasses } from "../api/class.js";
import { getQuarters } from "../api/quarters.js";
import subjects from "../db/subjects.js";
import { createSubject } from "../api/subjects.js";
import moment from "moment";

const createSubjects = async () => {
  const quarters = await getQuarters();
  const classes = await getClasses();

  for (const quarter of quarters) {
    for (const clazz of classes) {
      for (let date = moment(quarter.startDate); date <= moment(quarter.endDate); date.add(1, 'day')) {
        if (date.day() === 6 || date.day() === 0) {
          continue;
        }

        let itemsByDate = {};

        let startTime = moment({ year: date.year(), month: date.month(), date: date.date(), hour: 8, minute: 30 });

        let subjectsItems;
        let hasDuplicate;
        do {
          const numSubjects = Math.floor(Math.random() * 2) + 2;
          subjectsItems = pickRandom(subjects, numSubjects);
          hasDuplicate = false;
          for (const subject of subjectsItems) {
            const itemName = subject.name;
            if (itemsByDate[itemName]) {
              hasDuplicate = true;
              break;
            }
            itemsByDate[itemName] = true;
          }
          if (hasDuplicate) {
            itemsByDate = {};
          }
        } while (hasDuplicate);
        
        for (const subject of subjectsItems) {
          const item = {
            name: subject.name,
            classId: clazz.id,
            date: formatDateTime(startTime),
            quarter: quarter.quarter,
          };
          const endOfWeek = moment(date).subtract(2, "week").endOf('week');
          if (moment().isAfter(endOfWeek)) {
            item.homework = subject.homework[Math.floor(Math.random() * subject.homework.length)];
          } else {
            item.homework = null;
          }
          await createSubject(item);
          startTime.add(60, 'minutes');
        };
      }
    }
  };
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

export default createSubjects;