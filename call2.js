Function.prototype.call2 = function (context) {
  var context = context || window;
  context.fn = this;
  var args = [];
  for (var i = 0, length = arguments.length; i < length; i++) {
    args.push('arguments['+ i +']');
  }
  var result = eval('context.fn('+ args +')');
  delete context.fn;
  return result;
};

var value = 2;
var o1 = {
  value: 1
};
function test(name, age) {
  console.log(value)
  return {
    value: this.value,
    name: name,
    age: age
  }
}

test.call2(null)
console.log(test.call2(o1, 'zcc', 'age'));
