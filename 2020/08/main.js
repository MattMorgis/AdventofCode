const fs = require("fs/promises");

const parse = (inputs) => {
  return inputs.map((x) => {
    return {
      operation: x.substring(0, 3),
      argument: Number(x.substring(4, x.length)),
    };
  });
};

const partOne = (inputs) => {
  const instructions = parse(inputs);
  const visited = new Set();

  let accumulator = 0;
  let i = 0;

  while (!visited.has(i)) {
    visited.add(i);

    const { operation, argument } = instructions[i];

    if (operation === "jmp") i += argument;
    else {
      if (operation === "acc") accumulator += argument;
      i += 1;
    }
  }

  return accumulator;
};

(async () => {
  const fileData = await fs.readFile(__dirname + "/input.txt", "utf-8");
  const inputs = fileData.split("\n").filter((x) => x !== "");

  console.log("*** Part 1 ***");
  console.log(partOne(inputs));
})();
