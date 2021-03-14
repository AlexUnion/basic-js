module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const turns = disksNumber === 2 ? 3 : getMoves(disksNumber);
  const seconds = turns * 3600 / turnsSpeed;
  return {
    turns,
    seconds: Math.floor(seconds),
  };
};

function getMoves(num) {
  if (num === 3) return 7;
  else return getMoves(num - 1) * 2 + 1;
}
