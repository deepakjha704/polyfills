Array.prototype.mapPoly = function (callback) {
  if (typeof callback !== "function") {
    return TypeError("callback Type error");
  }
  const result = new Array(this.length);
  let index = 0;
  while (index < this.length) {
    if (this.hasOwnProperty(index)) {
      const value = this[index];
      const newCallback = callback(value, index, this);
      result[index] = newCallback;
    }
    index++;
  }
  return result;
};

const findSquare = function (value, index, mainArray) {
  return value * value;
};

const newSquareArray = [2, 3, 4, ""].mapPoly(findSquare);
console.log(newSquareArray);
