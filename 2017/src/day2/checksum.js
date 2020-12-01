const R = require('ramda');

/**
 * Part 1 - Checksum
 */
const checksum = data => {
  return R.sum(R.map(findDifferenceForRow, data));
};

const findDifferenceForRow = row => {
  return R.subtract(findMax(row))(findMin(row));
};

const findMax = R.reduce(R.max, -Infinity);

const findMin = R.reduce(R.min, Infinity);

/**
 * Part 2 - Division Checksum Variation
 */

const divisionChecksum = data => {
  return R.sum(R.map(findEvenDivisionNumberForRow, data));
};

const findEvenDivisionNumberForRow = row => {
  return R.reduce(
    (prev, number) => {
      return checkEvenDivisionForNumberAgainstRow(number, row) === 0
        ? prev
        : checkEvenDivisionForNumberAgainstRow(number, row);
    },
    0,
    row
  );
};

const checkEvenDivisionForNumberAgainstRow = (number, list) => {
  return R.reduce(
    (prev, current) => {
      return number !== current && number % current === 0
        ? R.divide(number, current)
        : prev;
    },
    0,
    list
  );
};

module.exports = {checksum, divisionChecksum};
