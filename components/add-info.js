import dbInfo from "../db/info.js";
import addInfo from "../api/info.js";

const createInfo = async () => {
    return await addInfo(dbInfo);
}

export default createInfo;