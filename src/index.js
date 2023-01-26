module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) return false;
  const arrayBrackets = [];
  const arrayIndex = [];

  bracketsConfig.forEach((typeBrackets) => {
    for (let i = 0; i < str.length; i++) {
      if ((str[i] === '|' && typeBrackets[0] === str[i] && !arrayBrackets.includes('|'))
        || (str[i] === '7' && typeBrackets[0] === str[i] && !arrayBrackets.includes('7'))
        || (str[i] === '8' && typeBrackets[0] === str[i] && !arrayBrackets.includes('8'))) {
        arrayBrackets.push(str[i]);
        arrayIndex.push(i);
      }
      else if (str[i] !== '|' && str[i] !== '7' && str[i] !== '8' && typeBrackets[0] === str[i]) {
        arrayBrackets.push(str[i]);
        arrayIndex.push(i);
      } else {
        let endItem = arrayBrackets[arrayBrackets.length-1];
        if (!!arrayBrackets.length && typeBrackets.includes(endItem) && str[i] === typeBrackets[1]) {
          if ((i - arrayIndex[arrayIndex.length - 1]) % 2 !== 0) {
            arrayBrackets.pop();
            arrayIndex.pop();
          }
        }
      }
    }
  });
  console.log(arrayBrackets);
  return !arrayBrackets.length;
}
