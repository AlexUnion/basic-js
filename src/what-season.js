module.exports = function getSeason(date) {
  if (!arguments || typeof date !== 'object') return 'Unable to determine the time of year!';
  if (Object.prototype.toString.call(date) !== '[object Date]'){
    throw new Error();
  }
  try {
    const month = date.getMonth();
    if (month >= 0 && month <= 1 || month === 11) {
      return 'winter';
    } else if (month >= 2 && month <= 4) {
      return 'spring';
    } else if (month >= 5 && month <= 7) {
      return 'summer';
    } else if (month >= 8 && month <= 10) {
      return 'autumn';
    }
  } catch (e) {
    throw new Error();
  }
};
