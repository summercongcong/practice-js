let s1 = 'aaabbbccccddddeee';
// 统计s1中重复出现的字符串数量
// 要求输出 '3a3b4c4d3e'
function countRepeat(str) {
  if(typeof str !== 'string') return;
  let arr1 = str.split('');
  let arr2 = [];
  for(let i = 0, length = arr1.length; i < length; i++) {
    if (arr1[i] !== arr1[i + 1]) {
      arr2.push(`${(i + 1)}${arr1[i]}`);
      arr1.splice(0, i + 1);
      i = 0;
    }
  }
  return arr2.toString().replace(/,/g, '');
}
console.log(getValue(s1))
