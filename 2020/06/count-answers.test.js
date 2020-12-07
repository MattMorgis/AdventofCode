const test = require("tape");

const { countAnswers, countTotalAnswers } = require("./count-answers");

const mockFileData = "abc\n\na\nb\nc\n\nab\nac\n\na\na\na\na\n\nb\n";
const inputs = mockFileData.trim().split("\n");

test("count answers - part 1", (t) => {
  // Arrange
  t.plan(1);

  // Act
  const answers = countAnswers(inputs);

  // Assert
  t.equal(answers, 11);
});

test("count answers - part 2", (t) => {
  // Arrange
  t.plan(1);

  // Act
  const answers = countTotalAnswers(inputs);

  // Assert
  t.equal(answers, 6);
});
