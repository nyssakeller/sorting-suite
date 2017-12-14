function numberGenerator(minVal, maxVal, arrayLength) {
  const randomArray = [];
  
  for (let i = 0; i < arrayLength; i++) {
    let randomNumber = Math.floor(Math.random() * (maxVal - minVal));
    randomArray.push(randomNumber)
  }
  return randomArray;
};

module.exports = numberGenerator;