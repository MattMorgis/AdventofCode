const fs = require("fs/promises");
const { findSum, findMultipleSums } = require("./find-sum");

const main = async () => {
  const fileData = await fs.readFile(__dirname + "/input.txt", "utf-8");
  const numbers = fileData.trim().split("\n");

  console.log("*** Part 1: ***");
  const sum = findSum(numbers);
  console.log(sum);

  console.log("*** Part 2: ***");
  const multiSum = findMultipleSums(numbers);
  console.log(multiSum);
};

main();
