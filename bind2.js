Function.prototype.bind2 = function (context) {
  // 做兼容处理
  if (typeof this !== 'function') {
    throw new Error('Function.prototype.bind - what is trying to be bound is not callable')
  }
  // 缓存this
  var self = this;
  // 处理bind时的参数
  var args = Array.prototype.slice.call(arguments, 1);
  // 转移原型对象时用的函数
  var fNOP = function () {};
  // 使用 new 关键字时的函数 改变 this 指向
  var fBound = function () {
    // 处理调用返回函数时传入的参数
    var bindArgs = Array.prototype.slice.call(arguments);
    self.apply(this instanceof fNOP ? this : args.concat(bindArgs))
  };
  fNOP.prototype = this.prototype;
  fBound.prototype = new fNOP();
  return fBound;
};