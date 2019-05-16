// time 0(n^2) because the duplicating of array within the recursive calls
// worst case is when the array is already sorted so in that case randomize the pivot
// instead of shifting
function quickSort(array) {
  if (array.length <= 1) return array;
  let pivot = array.shift();
  let left = array.filter(el => el <= pivot);
  let right = array.filter(el => el > pivot);
  let sortedLeft = quickSort(left);
  let sortedRight = quickSort(right);

  return sortedLeft.concat([pivot]).concat(sortedRight);
}
