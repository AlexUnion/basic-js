function repeater(str = '', options = {}) {
  const {
    repeatTimes = 1,
    separator = '+',
    additionRepeatTimes = 1,
    additionSeparator = '|',
  } = options;
  let {
    addition = '',
  } = options;
  if (typeof str !== 'string') str += '';
  if (typeof addition !== 'string') addition += '';
  const additionRepeat = makeRepeat(addition, {
    separator: additionSeparator,
    repeatTimes: additionRepeatTimes,
  });
  const repetitions = [];
  for (let i = 0; i < repeatTimes; i++) {
    repetitions.push(str + additionRepeat);
  }
  return repetitions.join(separator);
}

function makeRepeat(str = '', option = {}) {
  const {
    separator,
    repeatTimes,
  } = option;
  const repetition = [];
  for (let i = 0; i < repeatTimes; i++) {
    repetition.push(str);
  }
  return repetition.join(separator);
}

module.exports = repeater;