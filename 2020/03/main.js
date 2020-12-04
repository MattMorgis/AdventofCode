const fs = require("fs/promises");

const { countTrees } = require("./count-trees");

const main = async () => {
  const fileData = await fs.readFile(__dirname + "/input.txt", "utf-8");
  const inputs = fileData.trim().split("\n");

  console.log("*** Part 1: ***");
  console.log("Trees: " + countTrees(inputs));
};

main();
