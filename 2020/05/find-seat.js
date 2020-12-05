const findSeat = (low, high, letters) => {
  letters = [...letters];
  if (letters.length === 0) {
    return low;
  } else {
    const letter = letters.splice(0, 1)[0];
    const midPoint = Math.floor((high + low) / 2);

    if (letter === "F" || letter === "L") {
      return findSeat(low, midPoint, letters);
    } else if (letter === "B" || letter === "R")
      return findSeat(midPoint, high, letters);
  }
};

const findHighestSeat = (boardingPasses) => {
  const seatIds = [];

  for (const boardingPass of boardingPasses) {
    const rowLetters = boardingPass.substring(0, 7);
    const columnLetters = boardingPass.substring(7, 10);
    seatIds.push(
      findSeat(0, 128, rowLetters) * 8 + findSeat(0, 8, columnLetters)
    );
  }

  return Math.max(...seatIds);
};

module.exports = { findSeat, findHighestSeat };
