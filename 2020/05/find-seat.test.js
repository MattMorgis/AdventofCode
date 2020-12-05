const test = require("tape");

const { findSeat, findHighestSeat } = require("./find-seat");

test("find rows - part 1", (t) => {
  t.plan(1);
  const input = "BFFFBBFRRR";

  const rowLetters = input.substring(0, 7);

  const row = findSeat(0, 128, rowLetters);

  t.equal(row, 70);
});

test("find highest seat - part 1", (t) => {
  t.plan(1);
  const input = ["BFFFBBFRRR", "FFFBBBFRRR", "BBFFBBFRLL"];

  const highestSeat = findHighestSeat(input);

  t.equal(highestSeat, 820);
});
