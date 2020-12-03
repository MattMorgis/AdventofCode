const fs = require("fs/promises");
const validatePasswords = require("./validate-password");

const main = async () => {
  const fileData = await fs.readFile(__dirname + "/input.txt", "utf-8");
  const inputs = fileData.trim().split("\n");

  console.log("*** Part 1: ***");
  const validPasswords = validatePasswords(inputs);
  console.log({ validPasswords });
};

main();
