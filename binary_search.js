function binarySearch(arr, target) {
  if (arr.length === 0) return -1;
  let mid = Math.floor(arr.length / 2);
  if (arr[mid] < target) {
    return binarySearch(arr.slice(0, mid));
  } else if (arr[mid] === target) {
    return mid;
  } else {
    let subArr = binarySearch(arr.slice(mid + 1, arr.length - 1));
    if (!subArr) {
      return -1;
    } else {
      return subArr + mid + 1;
    }
  }
}
