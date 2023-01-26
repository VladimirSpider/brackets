module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) return false;
  const arrayBrackets = [];
  const arrayIndex = [];

  bracketsConfig.forEach((typeBrackets) => {
    str.split('').forEach((currentItem, index) => {
      if ((currentItem === '|' && typeBrackets[0] === currentItem && !arrayBrackets.includes('|'))
        || (currentItem === '7' && typeBrackets[0] === currentItem && !arrayBrackets.includes('7'))
        || (currentItem === '8' && typeBrackets[0] === currentItem && !arrayBrackets.includes('8'))) {
        arrayBrackets.push(currentItem);
        arrayIndex.push(index);
      }
      else if (currentItem !== '|' && currentItem !== '7' && currentItem !== '8' && typeBrackets[0] === currentItem) {
        arrayBrackets.push(currentItem);
        arrayIndex.push(index);
      } else {
        let endItem = arrayBrackets[arrayBrackets.length-1];
        if (!!arrayBrackets.length && typeBrackets.includes(endItem) && currentItem === typeBrackets[1]) {
          if ((index - arrayIndex[arrayIndex.length - 1]) % 2 !== 0) {
            arrayBrackets.pop();
            arrayIndex.pop();
          }
        }
      }
    })
  });

  return !arrayBrackets.length;
}
