// add function to the functuion prototype
Function.prototype.apply2 = function (context, arr) {
  // 兼容处理参数为null时
  context = context || window;
  context.fn = this;
  var result;
  if (arr) {
    // 参数存在时
    var args = [];
    for (var i = 0, length = arguments.length; i < length; i++) {
      args.push('arguments['+ i +']');
    };
    result = eval('context.fn('+ args +')');
  } else {
    result = context.fn();
  }
  delete context.fn;
  return result;
};

var value = 2;
var o1 = {
  value: 1
};

function test (name, age) {
  console.log(this.value);
  return {
    name: name,
    age: age,
    value: this.value
  }
}

console.log(Math.max.apply(null, [1,2,3,4,5,3,60]))
