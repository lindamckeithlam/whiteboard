// time 0(nlogn)

// makes sorting integers easier using the meta properties baked
// into the numbers

function radixSort(numbers) {
  if (!Array.isArray(numbers)) return null;
  let negativeArray = [];
  let negatives = numbers.filter(num => num < 0);
  if (negatives) {
    negativeArray = negatives.radixSort(
      negatives
        .map(negativeNum => Math.abs(negativeNum))
        .reverse()
        .map(num => -num)
    );
  }
  let positives = numbers.filter(num => num >= 0);
  let maxNum = getMaxDigits(positives);
  for (let i = 0; i < maxNum; i++) {
    let buckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < positives.length; j++) {
      let digit = getDigitFrom(positives[j], i);
      buckets[digit].push(positives[j]);
    }
    positives = [].concat(...buckets);
  }
  return negativeArray.concat(positives);
}

const getDigitFrom = (num, place) =>
  Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;

function getMaxDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, getIntLength(nums[i]));
  }
  return maxDigits;
}
