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

const partTwo = (inputs, target) => {
  const prefixSums = [];
  let sum = 0;
  for (const input of inputs) {
    prefixSums.push(sum);
    sum += input;
  }

  for (const [i, begin] of prefixSums.entries()) {
    for (const [j, end] of prefixSums.entries()) {
      if (end - begin === target) {
        let min = Number.MAX_VALUE;
        let max = Number.MIN_VALUE;

        for (let k = i; k < j; k++) {
          if (inputs[k] < min) min = inputs[k];
          else if (inputs[k] > max) max = inputs[k];
        }
        return min + max;
      }
    }
  }
  return -1;
};

(async () => {
  const fileData = await fs.readFile(__dirname + "/input.txt", "utf-8");
  const inputs = fileData
    .split("\n")
    .filter((x) => x !== "")
    .map((x) => Number(x));

  console.log("*** Part 1 ***");
  const badNumber = partOne(inputs);
  console.log(partOne(inputs));

  console.log("*** Part 2 ***");
  console.log(partTwo(inputs, badNumber));
})();
