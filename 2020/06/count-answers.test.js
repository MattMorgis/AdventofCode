const test = require("tape");

const { countAnswers } = require("./count-answers");

test("validate passwords - part 1", (t) => {
  const mockFileData = "abc\n\na\nb\nc\n\nab\nac\n\na\na\na\na\n\nb\n";
  const inputs = mockFileData.trim().split("\n");

  // Arrange
  t.plan(1);

  // Act
  const answers = countAnswers(inputs);

  // Assert
  t.equal(answers, 11);
});
