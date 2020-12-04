const countTrees = (inputs) => {
  let i = 0;
  let trees = 0;

  for (const row of inputs) {
    const rowLength = row.length;

    if (i >= rowLength) i -= rowLength;

    if (row[i] === "#") trees++;

    i += 3;
  }

  return trees;
};

module.exports = { countTrees };
