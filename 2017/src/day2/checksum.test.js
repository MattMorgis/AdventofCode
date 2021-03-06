const {checksum, divisionChecksum} = require('./checksum');

describe('Day 2 - Corruption Checksum', () => {
  test('checksum should equal 18', () => {
    const data = [[5, 1, 9, 5], [7, 5, 3], [2, 4, 6, 8]];
    expect(checksum(data)).toEqual(18);
  });

  test('divisionChecksum should equal 9', () => {
    const data = [[5, 9, 2, 8], [9, 4, 7, 3], [3, 8, 6, 5]];
    expect(divisionChecksum(data)).toEqual(9);
  });
});
