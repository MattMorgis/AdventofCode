const parse = (inputs) => {
  inputs.push("");
  const answers = [];
  let answer = [];
  for (const input of inputs) {
    answer.push(...input);
    if (input === "") {
      answers.push([...new Set(answer)]);
      answer = [];
    }
  }

  return answers;
};

const countAnswers = (inputs) => {
  const uniqueAnswers = parse(inputs);
  return uniqueAnswers.map((x) => x.length).reduce((x, y) => x + y, 0);
};

module.exports = { countAnswers };
