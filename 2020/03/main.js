const fs = require("fs/promises");

const { countTrees, multiplyTrees } = require("./count-trees");

const main = async () => {
  const fileData = await fs.readFile(__dirname + "/input.txt", "utf-8");
  const inputs = fileData.trim().split("\n");

  console.log("*** Part 1: ***");
  console.log("Trees: " + countTrees(inputs, [3, 1]));

  console.log("*** Part 2: ***");
  console.log("Product: " + multiplyTrees(inputs, [3, 1]));
};

main();
