const fs = require("fs/promises");

// This is a somewhat famous problem called "Two Sum"
// https://web.stanford.edu/class/cs9/sample_probs/TwoSum.pdf
const twoSum = (arr, S) => {
  const sums = [];
  const hashTable = {};

  for (const [i, number] of arr.entries()) {
    const sumMinusElement = S - number;

    if (hashTable[sumMinusElement] !== undefined)
      sums.push([number, sumMinusElement]);

    hashTable[number] = number;
  }

  return sums;
};

const partOne = (inputs) => {
  const preamble = 25;
  for (const [i, number] of inputs.entries()) {
    const arr = inputs.slice(i, preamble + i);
    const S = inputs[preamble + i];
    const sums = twoSum(arr, S);
    if (sums.length === 0) return S;
  }
};

(async () => {
  const fileData = await fs.readFile(__dirname + "/input.txt", "utf-8");
  const inputs = fileData
    .split("\n")
    .filter((x) => x !== "")
    .map((x) => Number(x));

  console.log("*** Part 1 ***");
  console.log(partOne(inputs));
})();
