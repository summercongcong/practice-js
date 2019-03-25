const values = [1, [2, 3],4];
const formatter = "[a, [b], [c]]";
const formatterArray = ['a', ['b'], 'c'];

const destructuringArray = (values, keys) => {
 try {
    const obj = {};
    if (typeof keys === 'string') {
      keys = JSON.parse(keys.replace(/\w+/g, '"$&"'));
    }
    
    const iterate = (values, keys) => {
      keys.forEach((key, i) => {
        if (Array.isArray(key)) iterate(values[i], key)
        else obj[key] = values[i];
      })
    }
    iterate(values, keys);

    return obj;
    console.log(keys);
 } catch (e) {console.log(e)};
};

console.log(destructuringArray(values, formatter));