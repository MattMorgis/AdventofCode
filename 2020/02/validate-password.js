class PolicyPassword {
  constructor(min, max, letter, password) {
    this.min = min;
    this.max = max;
    this.letter = letter;
    this.password = password;
  }
}

const parse = (input) => {
  // "1-3 a: abcde" => ["1-3 a", "abcde"]
  const [policy, password] = input.split(":").map((x) => x.trim());

  // "1-3 a" => ["1-3", "a"]
  const [minMax, letter] = policy.split(" ");
  const [min, max] = minMax.split("-").map((x) => Number(x));

  return new PolicyPassword(min, max, letter, password);
};

const findOccurrences = (char, str) => {
  return str.split(char).length - 1;
};

const validatePasswords = (inputs) => {
  let validPasswords = 0;
  const policyPasswords = [];
  for (const input of inputs) {
    const password = parse(input);
    policyPasswords.push(password);
  }

  for (const password of policyPasswords) {
    const occurrences = findOccurrences(password.letter, password.password);
    if (occurrences >= password.min && occurrences <= password.max)
      validPasswords++;
  }

  return validPasswords;
};

module.exports = validatePasswords;
