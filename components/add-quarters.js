import dbQuarters from "../db/quarters.js";
import { addQuarter } from "../api/quarters.js";

const createQuarter = async () => {
  return Promise.all(dbQuarters.map(async (el) => {
    const data = { quarter: el.quarter, startDate: el.startDate, endDate: el.endDate };
    return addQuarter(data);
  }));
}

export default createQuarter;