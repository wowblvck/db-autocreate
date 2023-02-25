import dbNews from "../db/news.js";
import addNews from "../api/news.js";

const createNews = async () => {
  dbNews.map(async (el) => {
    const data = { title: el.title, content: el.content };
    await addNews(data, el.image);
  });
}

export default createNews;