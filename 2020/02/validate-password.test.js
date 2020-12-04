const test = require("tape");

const {
  validatePasswordsByOccurrences,
  validatePasswordsByPosition,
} = require("./validate-password");

const mockFileData = "1-3 a: abcde\n1-3 b: cdefg\n2-9 c: ccccccccc\n".trim();
const inputs = mockFileData.split("\n");

test("validate-passwords - part 1", (t) => {
  // Arrange
  t.plan(1);

  // Act
  const numberOfValidPasswords = validatePasswordsByOccurrences(inputs);

  // Assert
  t.equal(numberOfValidPasswords, 2);
});

test("validate-passwords - part 2", (t) => {
  // Arrange
  t.plan(1);

  // Act
  const numberOfValidPasswords = validatePasswordsByPosition(inputs);

  // Assert
  t.equal(numberOfValidPasswords, 1);
});
