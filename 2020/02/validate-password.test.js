const test = require("tape");

const validatePasswords = require("./validate-password");

test("validate-passwords", (t) => {
  // Arrange
  t.plan(1);
  const mockFileData = "1-3 a: abcde\n1-3 b: cdefg\n2-9 c: ccccccccc\n".trim();
  const inputs = mockFileData.split("\n");

  // Act
  const numberOfValidPasswords = validatePasswords(inputs);

  // Assert
  t.equal(numberOfValidPasswords, 2);
});
