module.exports = function countCats(matrix) {
  let catCounter = 0;
  const cat = '^^';
  matrix.forEach((arrItem) => {
    arrItem.forEach((item) => {
      if (item === cat) catCounter++;
    })
  })
  return catCounter;
};
