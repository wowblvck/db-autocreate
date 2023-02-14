import Fakerator from "fakerator";
var fakerator = Fakerator("ru-RU");
var fakeratorEn = Fakerator("en-EN");

import randomBirthday from "random-birthday";

const generateRandomName = () => {
  let random = Math.random();
  let gender = "";
  if (random < 0.5) {
    gender = "male";
    return {
      firstName: fakerator.names.firstNameM(),
      lastName: fakerator.names.lastNameM(),
      gender: gender
    };
  } else {
    gender = "female";
    return {
      firstName: fakerator.names.firstNameF(),
      lastName: fakerator.names.lastNameF(),
      gender: gender
    };
  }
}

const generateChildrenNameM = () => {
  return fakerator.names.firstNameM();
}

const generateChildrenNameF = () => {
  return fakerator.names.firstNameF();
}

const generateBirthday = () => {
  const birthday = randomBirthday({ type: 'child' });
  const isoDate = birthday.toISOString();
  const formattedDate = isoDate.substr(0, 10);
  return formattedDate;
}

const generateRandomAdress = () => {
  return fakerator.address.street();
}

const generatePerson = (firstName, lastName, gender) => {
  return {
    username: fakeratorEn.internet.userName(),
    password: fakerator.internet.password(),
    firstName: firstName,
    lastName: lastName,
    gender
  };
}

export {
  generatePerson,
  generateRandomName,
  generateChildrenNameM,
  generateChildrenNameF,
  generateRandomAdress, 
  generateBirthday 
};