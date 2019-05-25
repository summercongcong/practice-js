Array.prototype.bubbleSort = function () {
  // 标识，如果此值未改变说明排序已完成
  let flag;
  for(let i = 0; i < this.length; i++) {
    flag = true;
    for(let j = 0; j < this.length - i; j++) {
      if (this[j] > this[j + 1]) {
        [this[j], this[j + 1]] = [this[j + 1], this[j]];
        flag = false;
      }
    }
    if (flag) {
      break;
    }
  }
  return this;
}
