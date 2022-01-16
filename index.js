// eslint-disable-next-line func-style
function sumItems(array) {
  if (array.length === 0) {
    return 0;
  }
  if (Array.isArray(array[0])) { // if array[0] is an array
    // send the head (another array) to sumItems and add the tail (the rest of the array) to the sumItens
    return sumItems(array[0]) + sumItems(array.slice(1));
  } else {
    return array[0] + sumItems(array.slice(1)); // if it's not an array, just add the head to the sumItems and the rest of the array to the sumItems
  }
}

module.exports = sumItems;

