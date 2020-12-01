const pairs = (numbers) => {
  return numbers.flatMap((x) => {
    return numbers.flatMap((y) => {
      return x != y ? [[x, y]] : [];
    });
  });
};

const findSum = (numbers) => {
  const pairwise = pairs(numbers);

  for (pair of pairwise) {
    const sum = Number(pair[0]) + Number(pair[1]);
    if (sum === 2020) return pair[0] * pair[1];
  }
};

const findMultipleSums = (numbers) => {
  const distinctNumbers = new Set(numbers.map((x) => Number(x)));

  for (let num1 of numbers) {
    for (let num2 of numbers) {
      if (distinctNumbers.has(2020 - num1 - num2)) {
        return num1 * (2020 - num1 - num2) * num2;
      }
    }
  }
};

module.exports = { findSum, findMultipleSums };
