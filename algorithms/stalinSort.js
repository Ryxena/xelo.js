function stalinSort(arr) {
    let sortedArr = [];
    let maxVal = null;
    for (let val of arr) {
      if (maxVal === null || val >= maxVal) {
        sortedArr.push(val);
        maxVal = val;
      }
    }
    return sortedArr;
  }
module.exports = stalinSort