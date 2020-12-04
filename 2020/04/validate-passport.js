const parse = (inputs) => {
  inputs.push("");
  const passports = [];
  let passport = {};
  for (const [i, input] of inputs.entries()) {
    if (input === "") {
      delete passport.cid;
      passports.push(passport);
      passport = {};
      continue;
    }

    const keyValues = input.split(" ");
    for (const keyValue of keyValues) {
      const [key, value] = keyValue.split(":");
      passport[key] = value;
    }
  }

  return passports;
};

const getValidPassports = (passports) => {
  return passports.filter((passport) => {
    return Object.keys(passport).length === 7;
  });
};

const validatePassports = (inputs) => {
  const passports = parse(inputs);

  const validPassports = getValidPassports(passports);

  return validPassports.length;
};

module.exports = { validatePassports };
