function mergeSort(array) {
  if (array.length <= 1) return array;
  let midIdx = Math.floor(array.length / 2);
  let left = array.slice(0, midIdx);
  let right = array.slice(midIdx, array.length - 1);

  let sortedLeft = mergeSort(left);
  let sortedRight = mergeSort(right);
  return merge(sortedLeft, sortedRight);
}

function merge(array1, array2) {
  let sortedArray = [];

  while (array1.length >= 0 || array2.length >= 0) {
    if (array1[0] < array2[0]) {
      sortedArray.push(array1.shift());
    } else {
      sortedArray.push(array2.shift());
    }
  }
  return sortedArray;
}
