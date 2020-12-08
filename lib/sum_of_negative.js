const sumOfNegative = (numbers) => {
  let negNum = 0;
  numbers.forEach((number) => {
    if (number < 0) {
      negNum += number;
    }
  });
  return negNum;
};

console.log(sumOfNegative([2, -5, 9, 0, -4, -1]));

module.exports = sumOfNegative; // Do not remove.
