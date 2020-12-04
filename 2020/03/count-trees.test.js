const test = require("tape");

const { countTrees } = require("./count-trees");
const mockFileData =
  "..##.......\n#...#...#..\n.#....#..#.\n..#.#...#.#\n.#...##..#.\n..#.##.....\n.#.#.#....#\n.#........#\n#.##...#...\n#...##....#\n.#..#...#.#\n";
const inputs = mockFileData.trim().split("\n");

test("count-trees - part 1", (t) => {
  // Arrange
  t.plan(1);

  // Act
  const trees = countTrees(inputs);

  // Assert
  t.equal(trees, 7);
});
