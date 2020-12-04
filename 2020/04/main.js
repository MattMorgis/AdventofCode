const fs = require("fs/promises");

const {
  validatePassports,
  validatePassportsByField,
} = require("./validate-passport");

(async () => {
  const fileData = await fs.readFile(__dirname + "/input.txt", "utf-8");
  const inputs = fileData.trim().split("\n");

  console.log("*** Part 1 ***");
  const validPassports = validatePassports(inputs);
  console.log({ validPassports });

  console.log("*** Part 2 ***");
  const validPassportsByField = validatePassportsByField(inputs);
  console.log({ validPassportsByField });
})();
