// write a function that takes in an array and returns another array
// with only unique elements

const arr2 = ["a", "b", "c", "a"];

function uniq(arr) {
  let uniq = [];
  let obj = {};

  arr.forEach(el => {
    if (el in obj) {
      obj[el] += 1;
    } else {
      obj[el] = 1;
    }
  });

  arr.forEach(el => {
    if (obj[el] === 1) {
      uniq.push(el);
    }
  });
  return uniq;
}

// console.log(uniq(arr2));



