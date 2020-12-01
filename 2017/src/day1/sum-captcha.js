const R = require('ramda');

const sumCaptcha = (fetchNextElement, captcha) => {
  // '1122' => ['1', '1', '2', '2'] => [1, 1, 2, 2]
  const characters = [...captcha].map(Number);

  return R.sum(
    characters.map((currentCharacter, i) => {
      return addIfEqual(currentCharacter, fetchNextElement(characters, i));
    })
  );
};

const addIfEqual = (int1, int2) => {
  return int1 === int2 ? int1 : 0;
};

const getNextElement = (array, index) => {
  return isLastElement(array, index) ? array[0] : array[index + 1];
};

const isLastElement = (array, index) => {
  return index === array.length - 1;
};

const getHalfwayElement = (array, index) => {
  const halfArrayLength = array.length / 2;
  return index >= halfArrayLength
    ? array[index - halfArrayLength]
    : array[index + halfArrayLength];
};

const sumCaptchaByNextChar = R.curry(sumCaptcha)(getNextElement);
const sumCaptchaByHalfwayChar = R.curry(sumCaptcha)(getHalfwayElement);

module.exports = {sumCaptchaByHalfwayChar, sumCaptchaByNextChar};
