Array.prototype.myFilter = function (callback, thisArg) {
  if (typeof callback !== "function") {
    return TypeError("callback type mismatch");
  }
  const result = [];
  let index = 0;

  while (index < this.length) {
    const value = this[index];
    const isTrue = callback.call(thisArg, value, index, originalArr);
    if (isTrue) {
      result.push(value);
    }
    index++;
  }
  return result;
};

const evenNumber = function (value, index, originalArr) {
  return value % 2 === 0;
};

const findEvenNumbers = [2, 4, 5, 6].myFilter(evenNumber);
console.log(findEvenNumbers);
