import path from "path";
import url from 'url';
import * as fs from "fs";
import { FILEPATH } from "../config/params.js";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const createFile = async (array, filename) => {
  try {
    const filePath = path.resolve(__dirname, "..", FILEPATH);
    if (!fs.existsSync(filePath)) {
      fs.mkdirSync(filePath, { recursive: true });
    }
    let fileContent = "";
    array.forEach((person, i) => {
      fileContent += `${i + 1}. Username: ${person.username}. Password: ${person.password}\n`;
    });
    fs.writeFileSync(path.join(filePath, filename), fileContent);
    console.log(`File ${filename} successfuly created!`);
  } catch (e) {
    throw new Error(`Error while create ${filename} - ${e}`);
  }
}


const createFileSubject = async (array, filename) => {
  try {
    const filePath = path.resolve(__dirname, "..", FILEPATH);
    if (!fs.existsSync(filePath)) {
      fs.mkdirSync(filePath, { recursive: true });
    }
    let fileContent = "";
    array.forEach((subject, i) => {
      fileContent += `${i + 1}. Name: ${subject.name}. Homework: ${subject.homework}. ClassId: ${subject.classId}. Quarter: ${subject.quarter}. Date: ${subject.date}\n`;
    });
    fs.writeFileSync(path.join(filePath, filename), fileContent);
    console.log(`File ${filename} successfuly created!`);
  } catch (e) {
    throw new Error(`Error while create ${filename} - ${e}`);
  }
}

export { createFile, createFileSubject };