const R = require('ramda');

const sumCaptcha = (fetchNextElement, captcha) => {
  // '1122' => ['1', '1', '2', '2'] => [1, 1, 2, 2]
  const characters = [...captcha].map(Number);

  let sum = 0;
  characters.forEach((currentCharacter, i, allCharacters) => {
    sum += addIfEqual(currentCharacter, fetchNextElement(allCharacters, i));
  });

  return sum;
};

const addIfEqual = (int1, int2) => {
  if (int1 === int2) {
    return int1;
  }
  return 0;
};

const getNextElement = (array, index) => {
  if (isLastElement(array, index)) {
    return array[0];
  }
  return array[index + 1];
};

const isLastElement = (array, index) => {
  return index === array.length - 1;
};

const getHalfwayElement = (array, index) => {
  const halfArrayLength = array.length / 2;
  if (index >= halfArrayLength) {
    return array[index - halfArrayLength];
  }

  return array[index + halfArrayLength];
};

const sumCaptchaByNextChar = R.curry(sumCaptcha)(getNextElement);
const sumCaptchaByHalfwayChar = R.curry(sumCaptcha)(getHalfwayElement);

module.exports = {sumCaptchaByHalfwayChar, sumCaptchaByNextChar};
