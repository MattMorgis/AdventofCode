const test = require("tape");

const { countTrees, multiplyTrees } = require("./count-trees");
const mockFileData =
  "..##.......\n#...#...#..\n.#....#..#.\n..#.#...#.#\n.#...##..#.\n..#.##.....\n.#.#.#....#\n.#........#\n#.##...#...\n#...##....#\n.#..#...#.#\n";
const inputs = mockFileData.trim().split("\n");

test("count-trees - part 1", (t) => {
  // Arrange
  t.plan(1);

  const slope = [3, 1];

  // Act
  const trees = countTrees(inputs, slope);

  // Assert
  t.equal(trees, 7);
});

test("count-trees - part 2, slope 1,2", (t) => {
  // Arrange
  t.plan(1);

  const slope = [1, 2];

  // Act
  const trees = countTrees(inputs, slope);

  // Assert
  t.equal(trees, 2);
});

test("count-trees - part 2", (t) => {
  // Arrange
  t.plan(1);

  // Act
  const product = multiplyTrees(inputs);

  // Assert
  t.equal(product, 336);
});
