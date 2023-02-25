import { Path, URL } from "../config/server.js";
import Jimp from "jimp";
import { Blob } from 'node:buffer';
import store from "../components/store.js";

const addNews = async (data, image) => {
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
      headers: {
        Authorization: `Bearer ${store.Token}`,
      },
      body: formData,
    });
    return await postResponse.json();
  } catch (error) {
    return console.log(error);
  }
}

export default addNews;