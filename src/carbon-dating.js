const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;
const LN_BY_TWO = 0.693;

module.exports = function dateSample(sampleActivityStr) {

  if (typeof sampleActivityStr !== 'string') return false;

  const sampleActivity = Number(sampleActivityStr);

  if (Number.isNaN(sampleActivity) || sampleActivity <= 0 || sampleActivity > MODERN_ACTIVITY) return false;

  const numberActivity = MODERN_ACTIVITY / sampleActivity; // N0 / N
  const lnN = Math.log(numberActivity); // ln( N0 / N)
  const k = LN_BY_TWO / HALF_LIFE_PERIOD;
  const time = lnN / k;
  return Math.ceil(time);
};
