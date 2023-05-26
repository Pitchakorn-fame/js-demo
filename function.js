const a = [1, 2, 3, -1, -2, -3];

function isNeg(n) {
  return n < 0;
}

function isPos(n) {
  return n >= 0;
}

function filter(arr, cd) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (cd(arr[i])) {
      result.push(arr[i]);
      console.log(arr[i]);
    }
  }
  return result;
}

n = filter(a, isPos);
console.log(n);
