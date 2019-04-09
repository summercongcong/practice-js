let arr1 = [1,2,3,4,5,6,1,2,3,4,12,5,13,451,23,5,2,3,4];
function sort(arr) {
  if (!Array.isArray(arr) || arr.length <= 1) return arr;
  let left = [];
  let right = [];
  let midVal = arr.splice(Math.ceil(arr.length - 1), 1)[0];
  arr.forEach(item => {
    if (item > midVal) {
      right.push(item);
    } else {
      left.push(item);
    }
  })
  return sort(left).concat([midVal], sort(right));
}
console.log(sort(arr1))