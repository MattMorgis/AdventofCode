const R = require('ramda');

const checksum = data => {
  return R.sum(data.map(findDifferenceForRow));
};

const findDifferenceForRow = row => {
  return R.subtract(findMax(row))(findMin(row));
};

const findMax = list => {
  return R.reduce(R.max, -Infinity, list);
};

const findMin = list => {
  return R.reduce(R.min, Infinity, list);
};

module.exports = checksum;
