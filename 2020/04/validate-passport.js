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

const validatePassportsByField = (inputs) => {
  const passports = parse(inputs);

  const passportsWithRequiredFields = getValidPassports(passports);

  const validPassports = [];
  for (const passport of passportsWithRequiredFields) {
    let valid = true;

    if (!(Number(passport.byr) >= 1920) || !(Number(passport.byr) <= 2002)) {
      valid = false;
      continue;
    }

    if (!(Number(passport.iyr) >= 2010) || !(Number(passport.iyr) <= 2020)) {
      valid = false;
      continue;
    }

    if (!(Number(passport.eyr) >= 2020) || !(Number(passport.eyr) <= 2030)) {
      valid = false;
      continue;
    }

    if (!passport.hgt.endsWith("in") && !passport.hgt.endsWith("cm")) {
      valid = false;
      continue;
    }

    if (passport.hgt.indexOf("in") > -1) {
      const height = Number(passport.hgt.slice(0, passport.hgt.indexOf("in")));

      if (!(height >= 59) || !(height <= 76)) {
        valid = false;
        continue;
      }
    }

    if (passport.hgt.indexOf("cm") > -1) {
      const height = Number(passport.hgt.slice(0, passport.hgt.indexOf("cm")));

      if (!(height >= 150) || !(height <= 193)) {
        valid = false;
        continue;
      }
    }

    if (!passport.hcl.startsWith("#")) {
      valid = false;
      continue;
    }

    if (
      !["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(passport.ecl)
    ) {
      valid = false;
      continue;
    }

    if (!(passport.pid.length === 9)) {
      valid = false;
      continue;
    }

    if (valid) validPassports.push(passport);
  }

  return validPassports.length;
};

module.exports = { validatePassports, validatePassportsByField };
