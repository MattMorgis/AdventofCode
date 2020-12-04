const test = require("tape");

const {
  validatePassports,
  validatePassportsByField,
} = require("./validate-passport");

// test("validate passwords - part 1", (t) => {
//   const mockFileData =
//     "ecl:gry pid:860033327 eyr:2020 hcl:#fffffd\nbyr:1937 iyr:2017 cid:147 hgt:183cm\n\niyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884\nhcl:#cfa07d byr:1929\n\nhcl:#ae17e1 iyr:2013\neyr:2024\necl:brn pid:760753108 byr:1931\nhgt:179cm\n\nhcl:#cfa07d eyr:2025 pid:166559648\niyr:2011 ecl:brn hgt:59in\n";
//   const inputs = mockFileData.trim().split("\n");

//   // Arrange
//   t.plan(1);

//   // Act
//   const validPassports = validatePassports(inputs);

//   // Assert
//   t.equal(validPassports, 2);
// });

test("validate passwords - part 1", (t) => {
  // Arrange
  t.plan(1);
  const mockFileData =
    "byr:1920 iyr:2019 eyr:2031\nhgt:159cm hcl:#74454a\necl:grn pid:000000000\n";
  const inputs = mockFileData.trim().split("\n");

  // Act
  const validPassports = validatePassportsByField(inputs);

  // Assert
  t.equal(validPassports, 1);
});
