import dbInfo from "../db/info.js";
import addInfo from "../api/info.js";

const createInfo = async () => {
  await addInfo(dbInfo);
}

export default createInfo;