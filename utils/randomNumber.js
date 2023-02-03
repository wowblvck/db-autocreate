function randomNumberGenerator(limit) {
  let usedNumbers = new Set();
  return function() {
    if (usedNumbers.size === limit) {
      usedNumbers.clear();
    }
    let randomNumber = Math.floor(Math.random() * limit) + 1;
    while (usedNumbers.has(randomNumber)) {
      randomNumber = Math.floor(Math.random() * limit) + 1;
    }
    usedNumbers.add(randomNumber);
    return randomNumber;
  };
}

export default randomNumberGenerator;