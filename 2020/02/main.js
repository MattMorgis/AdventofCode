const fs = require("fs/promises");
const {
  validatePasswordsByOccurrences,
  validatePasswordsByPosition,
} = require("./validate-password");

const main = async () => {
  const fileData = await fs.readFile(__dirname + "/input.txt", "utf-8");
  const inputs = fileData.trim().split("\n");

  console.log("*** Part 1: ***");
  const validPasswordsByOccurrences = validatePasswordsByOccurrences(inputs);
  console.log({ validPasswordsByOccurrences });

  console.log("*** Part 2: ***");
  const validPasswordsByPosition = validatePasswordsByPosition(inputs);
  console.log({ validPasswordsByPosition });
};

main();
