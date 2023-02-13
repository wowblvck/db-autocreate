const generateClassName = () => {
  let result = "";
  let nums = [1, 2, 3, 4, 5];
  let letters = ["А", "Б", "В", "Г", "Д", "Е", "Ж", "И", "К", "Л", "М", "Н", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Ы", "Э", "Ю", "Я"];
  
  let randomNum = nums.splice(Math.floor(Math.random() * nums.length), 1)[0];
  let randomLetter = letters.splice(Math.floor(Math.random() * letters.length), 1)[0];
  return result = `${randomNum}${randomLetter}`;
}

export default generateClassName;