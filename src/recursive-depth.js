module.exports = class DepthCalculator {
  calculateDepth(array) {
    if (Array.isArray(array)) {
      if (array.length === 0) return 1;
      const maxIter = Math.max(...array.map((item) => (
          this.calculateDepth(item)
      )));
      return maxIter + 1;
    }
    return 0;
  }
};