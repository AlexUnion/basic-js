function ChainMaker() {
  this._arr = [];
  this.getLength = function () {
    return this._arr.length;
  };
  this.addLink = function (value) {
    this._arr.push(
        `( ${value} )`
    );
    return this;
  };
  this.removeLink = function(position) {
    if (position < 1 || position > this._arr.length || Number.isNaN(position)) {
      this._arr.length = 0;
      throw new Error();
    }
    this._arr.splice(position - 1, 1);
    return this;
  };
  this.reverseChain = function() {
    this._arr.reverse();
    return this;
  };
  this.finishChain = function () {
    const res = this._arr.join('~~');
    this._arr.length = 0;
    return res;
  }
}

module.exports = new ChainMaker();
