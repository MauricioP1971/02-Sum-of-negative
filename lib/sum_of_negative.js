const sumOfNegative = (numbers) => {
  // TODO: You are getting a `numbers` array. Return the sum of **negative** numbers only.
  let negNum = 0;
  numbers.forEach((number) => {
    if (number < 0) {
      negNum += number;
    }
  });
  return negNum;
};

module.exports = sumOfNegative; // Do not remove.
