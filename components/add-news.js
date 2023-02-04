import { Path, URL } from "../config/server.js";
import dbNews from "../db/news.js";

const addNewsInDB = async (data) => {
  const response = await fetch(`${URL}/${Path.News}`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });
  return await response.json();
}

const createNews = () => {
  dbNews.forEach(async (el) => {
    await addNewsInDB(el);
    console.log(`News was created`);
  })
}

export default createNews;