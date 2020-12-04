const countTrees = (inputs, slope) => {
  let i = 0;
  let trees = 0;

  const [right, down] = slope;

  for (const [rowNumber, row] of inputs.entries()) {
    if (down === 2 && rowNumber % 2 === 1) continue;
    const rowLength = row.length;

    if (i >= rowLength) i -= rowLength;

    if (row[i] === "#") trees++;

    i += right;
  }

  return trees;
};

const multiplyTrees = (inputs) => {
  const slopes = [
    [1, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [1, 2],
  ];

  const trees = [];
  for (slope of slopes) {
    trees.push(countTrees(inputs, slope));
  }

  return trees.reduce((a, b) => a * b, 1);
};

module.exports = { countTrees, multiplyTrees };
