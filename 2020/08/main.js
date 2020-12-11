const fs = require("fs/promises");

const parse = (inputs) => {
  return inputs.map((x) => {
    return {
      operation: x.substring(0, 3),
      argument: Number(x.substring(4, x.length)),
    };
  });
};

const run = (instructions) => {
  const visited = new Set();

  let accumulator = 0;
  let i = 0;

  while (!visited.has(i) && i < instructions.length) {
    visited.add(i);

    const { operation, argument } = instructions[i];

    if (operation === "jmp") i += argument;
    else {
      if (operation === "acc") accumulator += argument;
      i += 1;
    }
  }

  return [i >= instructions.length, accumulator];
};

(async () => {
  const fileData = await fs.readFile(__dirname + "/input.txt", "utf-8");
  const inputs = fileData.split("\n").filter((x) => x !== "");

  const instructions = parse(inputs);

  console.log("*** Part 1 ***");
  console.log(run(instructions)[1]);

  console.log("*** Part 2 ***");

  for (const [i, { operation, argument }] of instructions.entries()) {
    if (operation !== "acc") {
      instructions[i].operation = operation === "jmp" ? "nop" : "jmp";

      const [terminates, acc] = run(instructions);
      if (terminates) {
        console.log(acc);
        break;
      }

      instructions[i].operation = operation;
    }
  }
})();
