const test = require("tape");
const { findSum, findMultipleSums } = require("./find-sum");

test("find-sum", (t) => {
  // Arrange
  t.plan(1);
  const mockFileData = "1721\n979\n366\n299\n675\n1456\n".trim();
  const numbers = mockFileData.split("\n");

  // Act
  const sum = findSum(numbers);

  // Assert
  t.equal(sum, 514579);
});

test("find-multiple-sum", (t) => {
  // Arrange
  t.plan(1);
  const mockFileData = "1721\n979\n366\n299\n675\n1456\n".trim();
  const numbers = mockFileData.split("\n");

  // Act
  const sum = findMultipleSums(numbers);

  // Assert
  t.equal(sum, 241861950);
});
