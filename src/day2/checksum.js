const R = require('ramda');

const checksum = data => {
  const numbersToSum = data.map(row => {
    const largest = R.reduce(R.max, 0, row);
    const smallest = R.reduce(R.min, 1000000000, row);
    return largest - smallest;
  });

  return R.sum(numbersToSum);
};

module.exports = checksum;
