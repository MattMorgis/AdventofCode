const fs = require("fs/promises");

const {
  numberOfPassportsWithRequiredFields,
  validatePassports,
} = require("./validate-passport");

(async () => {
  const fileData = await fs.readFile(__dirname + "/input.txt", "utf-8");
  const inputs = fileData.trim().split("\n");

  console.log("*** Part 1 ***");
  console.log(numberOfPassportsWithRequiredFields(inputs));

  console.log("*** Part 2 ***");
  const validPassports = validatePassports(inputs);
  console.log({ validPassports });
})();
