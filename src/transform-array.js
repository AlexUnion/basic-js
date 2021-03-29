const [
  DISCARD_NEXT,
  DISCARD_PREV,
  DOUBLE_NEXT,
  DOUBLE_PREV
] = [
  '--discard-next',
  '--discard-prev',
  '--double-next',
  '--double-prev',
];

module.exports = function transform(array) {

  if (!(array instanceof Array)) throw new Error();

  if (array.find((item) => typeof item === 'string')) return array;

  try {

    const transformed = [];

    for (let i = 0; i < array.length; ) {
      const item = array[i];

      if (typeof item === 'number') {
        transformed.push(item);
      } else {

        switch (item) {
          case DISCARD_NEXT: {
            if (i !== array.length - 1) {
              i++;
            }
            break;
          }
          case DISCARD_PREV: {
            if (i !== 0) {
              transformed.pop();
            }
            break;
          }
          case DOUBLE_NEXT: {
            if (i !== array.length - 1) {
              transformed.push(array[i + 1]);
            }
            break;
          }
          case DOUBLE_PREV: {
            if (i !== 0) {
              transformed.push(array[i - 1]);
            }
            break;
          }

        }
      }
      i++;
    }

    return transformed;

  } catch (e) {
    console.log(e.message);
    throw new Error();
  }
};
