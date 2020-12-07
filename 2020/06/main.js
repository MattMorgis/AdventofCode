const fs = require("fs/promises");

const { countAnswers, countTotalAnswers } = require("./count-answers");

(async () => {
  const fileData = await fs.readFile(__dirname + "/input.txt", "utf-8");
  const inputs = fileData.trim().split("\n");

  console.log("*** Part 1 ***");
  console.log(countAnswers(inputs));

  console.log("*** Part 2 ***");
  console.log(countTotalAnswers(inputs));
})();
