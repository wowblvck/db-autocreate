import * as toonavatar from "cartoon-avatar";
import Jimp from "jimp";
import { Blob } from 'node:buffer';

const editProfile = async (id, gender, path, phone) => {
  const url = toonavatar.generate_avatar({"gender": `${gender}`});
  const jimpImage = await Jimp.read(url);
  const buffer = await jimpImage.getBufferAsync(Jimp.MIME_PNG);
  if (buffer.byteLength === 0) {
    console.log(`Buffer is empty!`);
    return;
  }
  const formData = new FormData();
  formData.append("id", id);
  const blob = new Blob([buffer], { type: "image/png" });

  formData.append('profilePic', blob, `user_pic_${id}.png`);
  if (phone) {
    formData.append("phone", phone);
  }
  const postResponse = await fetch(path, {
    method: "PUT",
    body: formData,
  });
  return await postResponse.json();
};

export default editProfile;