const parseUnique = (inputs) => {
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

const parse = (inputs) => {
  const answers = [];
  let answer = [];

  for (const input of inputs) {
    if (input === "") {
      answers.push([answer]);
      answer = [];
    } else answer.push(input);
  }

  return answers;
};

const commonCharacters = (strings) => {
  // primary array, assume all chars have been seen
  let prim = new Array(26).fill(true);

  for (const i in strings) {
    // secondary for common chars, assume false
    const sec = new Array(26).fill(false);

    for (let j = 0; j < strings[i].length; j++) {
      // if character is present in all
      // strings before, mark it.
      if (prim[strings[i].charCodeAt(j) - 97])
        sec[strings[i].charCodeAt(j) - 97] = true;
    }

    prim = [...sec];
  }

  const ALPHABET = "abcdefghijklmnopqrstuvwxyz".split("");

  return prim.reduce((letters, bool, i) => {
    if (bool) letters.push(ALPHABET[i]);

    return letters;
  }, []);
};

const countAnswers = (inputs) => {
  const uniqueAnswers = parseUnique(inputs);
  return uniqueAnswers.map((x) => x.length).reduce((x, y) => x + y, 0);
};

const countTotalAnswers = (inputs) => {
  const answers = parse(inputs);
  return answers
    .map((answer) => commonCharacters(...answer))
    .map((x) => x.length)
    .reduce((x, y) => x + y, 0);
};

module.exports = { countAnswers, countTotalAnswers };
