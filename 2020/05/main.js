const fs = require("fs/promises");

const { findHighestSeat } = require("./find-seat");

(async () => {
  const fileData = await fs.readFile(__dirname + "/input.txt", "utf-8");
  const inputs = fileData.trim().split("\n");

  console.log("*** Part 1 ***");
  console.log(findHighestSeat(inputs));
})();
