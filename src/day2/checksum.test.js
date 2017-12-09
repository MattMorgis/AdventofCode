const checksum = require('./checksum');

describe('Day 2 - Corruption Checksum', () => {
  test('checksum should equal 18', () => {
    const data = [[5, 1, 9, 5], [7, 5, 3], [2, 4, 6, 8]];
    expect(checksum(data)).toBe(18);
  });
});
