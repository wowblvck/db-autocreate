import dbNews from "../db/news.js";
import addNews from "../api/news.js";

const createNews = async () => {
  return Promise.all(dbNews.map(async (el) => {
    const data = { title: el.title, content: el.content };
    return addNews(data, el.image);
  }));
}

export default createNews;