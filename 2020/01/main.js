const fs = require("fs/promises");
const findSum = require("./find-sum");

const main = async () => {
  const fileData = await fs.readFile(__dirname + "/input.txt", "utf-8");
  const numbers = fileData.trim().split("\n");
  const pair = findSum(numbers);
  console.log("*** Part 1: ***");
  console.log(pair[0] * pair[1]);
};

main();
