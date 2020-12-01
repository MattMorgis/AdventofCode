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
    if (sum === 2020) return pair;
  }
};

module.exports = findSum;
