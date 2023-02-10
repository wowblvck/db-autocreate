import { Path, URL } from "../config/server.js";
import dbNews from "../db/news.js";
import Jimp from "jimp";
import { Blob } from 'node:buffer';

const addNewsInDB = async (data, image) => {
  const { title, content } = data;
  const formData = new FormData();
  formData.append('title', title);
  formData.append('content', content);

  try {
    const jimpImage = await Jimp.read(image.url);
    const buffer = await jimpImage.getBufferAsync(Jimp.MIME_JPEG);
    if (buffer.byteLength === 0) {
      console.log(`Buffer is empty!`);
      return;
    }
    const blob = new Blob([buffer], { type: "image/jpeg" });
    formData.append('image', blob, image.name);
    
    const postResponse = await fetch(`${URL}/${Path.News}`, {
      method: "POST",
      body: formData,
    });
    console.log(`News was created`);
    return await postResponse.json();
  } catch (error) {
    console.log(error);
    return;
  }
}

const createNews = async () => {
  for (const el of dbNews) {
    const data = { title: el.title, content: el.content };
    await addNewsInDB(data, el.image);
  }
}

// createNews();

export default createNews;