const R = require('ramda');

const checksum = data => {
  const numbersToSum = data.map(row => {
    const sorted = R.sort(sortNumerically, row);
    return R.last(sorted) - R.take(1, sorted);
  });

  return numbersToSum.reduce((a, b) => {
    return a + b;
  }, 0);
};

const sortNumerically = (a, b) => {
  return a - b;
};

module.exports = checksum;
