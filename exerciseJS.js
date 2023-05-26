//1. Writes a function draw(n) draw(n) takes in a number n,
//and prints the stars (*) into the console in this pattern

function draw(n) {
  b = "";
  for (let i = 0; i < n; i++) {
    b = "";
    for (let j = 0; j < n; j++) {
      b += "*";
    }
    console.log(b);
  }
}

//TEST
//draw(5)

//2.Re-write drawNg(n) (-ng suffix is usually used for next-gen) Like draw(n), but this time drawNg(n) prints this pattern:

function drawNg(n) {
  let b = "";
  for (let i = 0; i < n; i++) {
    b += "*";
    console.log(b);
  }
}

//TEST
//drawNg(5)

//3. Write a function maxNegMinPos(arr) maxNegMinPos(arr) takes in an array arr,
//and it prints the max negative value (maxNeg) as well as the min positive value (minPos)

function maxNegMinPos(arr) {
  let a = [];
  let b = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      a.push(arr[i]);
    } else if (arr[i] < 0) {
      b.push(arr[i]);
    }
  }
  console.log("MinPos is", Math.min(...a));
  console.log("MaxNeg is", Math.max(...b));
}

//TEST
// const tryIt = [12, -13, 14, 4, 2, -1, -18];
// maxNegMinPos(tryIt)

//4. Write a function fib(n), fib(n)returns the nth element of a fibonacci series.The series look like this
//1, 2, 3, 5, 8, 13, 21, ...

function fib(n) {
  let a = [1, 2];
  for (let i = 0; i < n; i++) {
    a.push(a[i] + a[i + 1]);
  }
  console.log(a[n - 1]);
}

// TEST
// fib(5);

/*n = 2       1   2   3   4   5   6   7     //fibonacci
  i   i+1     0   1   2   3   4   5   6     //index       
  0    1      1   2   3
  1    2      1   2   3   5  
  2    3      1   2   3   5   8
  3    4      1   2   3   5   8  13*/

//5. Write a function mutual(arr1, arr2)
//mutual(arr1, arr2) returns a new array containing all mutual members of arr1 and arr2

function mutual(arr1, arr2) {
  let a = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        a.push(arr1[i]);
      }
    }
  }
  return a;
}

// TEST
// const class1 = ["Alice", "Bob", "John", "Jane"];
// const class2 = ["John", "Foobar", "Barbaz", "Foobaz", "Bob"];
// console.log(mutual(class1, class2));

// 6. Write a fizzBuzz(n) function
//fizzBuzz(n) iterates over inclusive range [1, n], and for each element in the range, fizzBuzz(n)
//prints Fizz if the element is divisible by 3,
//Buzz if the element is divisible by 5, and
//FizzBuzz if the element is divisible by 3 and 5.
//If no conditions are met, fizzBuzz(n) prints the element
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// TEST
// fizzBuzz(20);

//7. Write a GCD function gcd(a, b)
//gcd(a, b) returns greatest common divisor (GCD / หรม.) between the pair a, b

function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

// TEST
// gcd(10, 15); // 5
// gcd(18, 12); // 6
// gcd(3, 2); // 1
// console.log(gcd(18, 12));

//8. Try learning Array.sort method (function) with this snippet:
/*const arr = [3, 2, 1, 12, 13, 11];
arr.sort();
console.log(arr); // [1, 11, 12, 13, 2, 3] try fixing this problem/implementing your own with a for loop*/

function sortNum(arr) {
  result = [];
  for (let i = 0; i < arr.length; i++) {
    let a = 0;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        a = arr[i];
        arr[i] = arr[j];
        arr[j] = a;
      }
    }
    result.push(arr[i]);
  }
  return result;
}

// TEST
// const arrt = [3, 2, 1, 12, 13, 11];
// console.log(sortNum(arrt));

// 9. Write a function prime(n)
// prime(n) returns an array of first n prime numbers
// 2, 3, 5, 7, 11

function prime(n) {
  let result = [];
  if (n < 1) {
    return [];
  }
  for (let i = 2; result.length < n; i++) {
    let check = true;
    for (let j = 2; j <= i; j++) {
      if (i % j === 0 && i !== j) {
        check = false;
        break;
      }
    }
    if (check) result.push(i);
  }
  return result;
}

// TEST
// console.log(prime(5));

/*n = 5
i = 2 j = 2  
i = 3 j = 2 Y
i = 4 j = 2 N
      j = 3 
i = 5 j = 2 
      j = 3
      j = 4*/

//10. Write a function drawDown(chart)
//drawDown(chart) returns the biggest downward movement within the chart points

function drawDown(chart) {
  let peak = chart[0];
  let maxDown = 0;
  let curDownDown = 0;
  for (let i = 1; i < chart.length; i++) {
    if (chart[i] > peak) {
      peak = chart[i];
      curDownDown = 0;
    } else {
      curDownDown = peak - chart[i];
      if (curDownDown > maxDown) {
        maxDown = curDownDown;
      }
    }
  }
  return maxDown;
}

// TEST
// const chart = [110, 105, 95, 9, 80, 17, 120, 115, 11];
// drawDown(chart); // 109
// console.log(drawDown(chart));
//console.log(drawDown([10, 40, 10, 50, 40]));

//11. Write a function summarize(text, trail, len)

function summarize(text, trail, len) {
  if (len <= 3) {
    return "";
  }
  if (text.length === len) {
    return text;
  }
  let result = "";
  if (text.length > len) {
    for (let i = 0; i < len; i++) {
      result += text[i];
      //console.log(result); // check
    }
  }
  let ansCutBlank = "";
  for (let j = result.length - 1; j < len; j--) {
    if (result[j] === " ") {
      ansCutBlank = result.slice(0, j);
      //console.log(ansCutBlank, ansCutBlank.length); // check
      break;
    }
  }

  ansCutBlank = ansCutBlank + trail;
  //console.log(ansCutBlank, ansCutBlank.length);

  let ansCutBlankTwo = "";
  if (ansCutBlank.length <= len) {
    return ansCutBlank;
  } else {
    for (let k = ansCutBlank.length - trail.length - 1; k > 0; k--) {
      if (ansCutBlank[k] === " ") {
        ansCutBlankTwo = ansCutBlank.slice(0, k);
        break;
      }
    }
  }
  ansCutBlankTwo = ansCutBlankTwo + trail;
  return ansCutBlankTwo;
}

//TEST
// const articleCleverse =
//   "I am from Cleverse Academy! Today, I'm here to teach you some JavaScript programming";

// console.log(summarize(articleCleverse, " ...", 30)); // "I am from Cleverse ..."

// const articleCleverse =
//   "I am from Cleverse Academy! Today, I'm here to teach you some JavaScript programming";

// console.log(summarize(articleCleverse, " ...", 30)); // "I am from Cleverse ..."
// console.log(summarize(articleCleverse, " ...", 10));

// const articleFoo = "Good morning ladies and gentlemen";

// console.log(summarize(articleFoo, " ...", 2)); // ""
// console.log(summarize(articleFoo, " ...", 10)); // "Good ..."
// console.log(summarize(articleFoo, " ...", 20)); // "Good morning ..."
// console.log(summarize(articleFoo, " ...", 25)); // "Good morning ladies ..."

//12. Write a function filterLt(n, arr)
//filterLt(n, arr) takes in an a number n and an array of numbers arr,
//and returns a new array containing all elements of arr that is lesser than (lt) n

function filterLt(n, arr) {
  let a = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < n) {
      a.push(arr[i]);
    }
  }
  console.log(a);
}

// TEST
// const arr = [120, 112, 111, 130, 169, 101];
// filterLt(0, arr);
// filterLt(112, arr);

//13. Write a function filterGt(n, arr)
//filterGt(n, arr) performs similar business logic to filterLt(n, arr) above,
//but instead of doing a lesser-than test, it does a greater-than test

function filterGt(n, arr) {
  let a = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > n) {
      a.push(arr[i]);
    }
  }
  console.log(a);
}

// TEST
// const arr = [120, 112, 111, 130, 169, 101];
// filterGt(0, arr);
// filterGt(112, arr);

////14. Write a function isMember(mem, arr)
//isMember(mem, arr) returns a boolean indicating whether mem is a member of arr

function isMember(mem, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === mem) {
      return true;
    }
  }
  return false;
}

//TEST
//console.log(isMember(5, [1, 3, 7, 12]));

//15. Implement a programmable logic to compute compounded return
//The interface (function signature) to this logic should be as simple as
//compoundedReturn(amount, interest, n) where amount is the amount of fund invested in the 1st period,
//interest is an interest percentage per period, and n is the number of periods of the investment.
//FV  =  PV (1 + r)n

function compoundedReturn1(amount, interest, n) {
  let comRe = 0;
  let money = 0;
  for (let i = 0; i < n; i++) {
    amount = amount + (amount * interest) / 100;
  }
  return amount;
}

function compoundedReturn2(amount, interest, n) {
  let comReturn = amount * (1 + interest / 100) ** n;
  return Math.round(comReturn);
}

// TEST
// console.log(compoundedReturn1(100, 1, 1)); // 101
// console.log(compoundedReturn2(100, 10, 2)); //121

//16. Write a function mean(arr)
//mean(arr) returns the mean average value of arr dataset (represented as an array).
//If any one of arr members are of non-number type, mean(arr) returns null

function mean(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      console.log("null");
      return;
    }
    sum += arr[i];
  }
  console.log(sum / arr.length);
}

// TEST
// mean([1, 2, 3]); // 2
// mean([1, "foo", 3]); // null*/

//17. Write a function mode(arr)

function mode(arr) {
  // arr = [1, 2, 1, 4, 5, 6, 2, 1]
  let sortArr = sortNum(arr); // sortArr = [1, 1, 1, 2, 2, 4, 5, 6]
  let count = 1;
  let dictCount = {};
  let keepNum = [];
  for (let i = 0; i < arr.length; i++) {
    if (sortArr[i] === sortArr[i + 1]) {
      count += 1;
    } else {
      dictCount[sortArr[i]] = count; // dictCount = {1:3, 2:2, 4:1, 5:1, 6:1}
      keepNum.push(sortArr[i]); // keepNum = [1,2,4,5,6]
      count = 1;
    }
  }
  let quanNum = [];
  let a = 0;
  for (let j = 0; j < keepNum.length; j++) {
    quanNum.push(dictCount[keepNum[j]]); // quanNum = [3, 2, 1, 1, 1] index same with keepNum
  }
  let maxQuan = Math.max(...quanNum); // maxQuan = 3
  let c = 0;
  for (let i = 0; i < quanNum.length; i++) {
    if (quanNum[i] === maxQuan) {
      // If none is found, or if there are no clear winner, mode(arr) returns null
      c += 1;
      if (c > 1) return null;
    }
  }
  //console.log(maxQuan);
  return keepNum[quanNum.indexOf(Math.max(...quanNum))];
}

// function sortNum(arr) {
//   result = [];
//   for (let i = 0; i < arr.length; i++) {
//     let a = 0;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] > arr[j]) {
//         a = arr[i];
//         arr[i] = arr[j];
//         arr[j] = a;
//       }
//     }
//     result.push(arr[i]);
//   }
//   return result;
// }

//TEST
// //let a = mode([1, 2, 1, 4, 5, 6, 2, 1]);
// //console.log(a);
// console.log(mode([1, 2, 1, 4, 5, 6, 2, 1])); // 1
// console.log(mode([2, 5, 2, 4, 5])); // null
// console.log(mode([2, 5, 2, 4, 5, 3, 2])); // 2
// console.log(mode([1, 2, 3, 4, 5])); // null

// 18. Write a function mid(arr)
// mid(arr) returns the array containing middle element(s) of array arr
// If the array length is an even number, mid returns the 2 middle elements.

function mid(arr) {
  let arrLen = arr.length;
  if (arrLen % 2 !== 0) {
    return arr[Math.floor(arrLen / 2)];
  }
  let t = arrLen / 2;
  return arr.slice(t - 1, t + 1);
}

//TEST
// mid(["john"]); // "john"
// mid(["foo", "bar", "baz"]); // ["bar"]
// mid(["a", "b", "c", "d", "e"]); // "c"
// mid([1, 2, 3, 4]); // [2, 3]
// mid([1, 2, 3, 4, 5, 6]); // [3,4]
// console.log(mid([1, 2, 3, 4, 5, 6]));

//  0    1    2   3   4

// 19 Write a function median(arr)
// median(arr) returns the statistical median from the dataset arr (represented as an array)
// A dataset's median is the element at the middle of the sorted list.
// You are allowed to use Array.sort method for this implementation

function median(arr) {
  let result = [];
  let newArr = sortNum(arr); // newArray = [1,2,3,4,5]
  if (newArr.length % 2 !== 0) {
    return newArr[Math.floor(newArr.length / 2)];
  } else {
    let med = newArr.slice(newArr.length / 2 - 1, newArr.length / 2 + 1);
    return (med[0] + med[1]) / 2;
  }
}
// TEST
// console.log(median([2, 1, 5, 3, 4])); // 3
// console.log(median([2, 1, 5, 3, 4, 6])); // 7/2= 3.5

// 20. Write a function initArr(val, len)
// initArr(val, len) returns an array of length len with all members initialized to val

function initArr(val, len) {
  let result = [];
  for (let i = 0; i < len; i++) {
    result.push(val);
  }
  return result;
}

// TEST
// console.log(initArr(0, 5)); // [0, 0, 0, 0, 0]

// 21 Write a function flatMap(arr)
// flatMap(arr) takes in an array of arrays, and returns the flattened array.

function flatMap(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    const a = arr[i];
    for (let j = 0; j < a.length; j++) {
      result.push(a[j]);
    }
  }

  return result;
}

// TEST
// const arr = [
//   [1, 2, 3],
//   [100, 200],
//   [10, 20],
// ];
// flatMap(arr); // [1, 2, 3, 100, 200, 10, 20]
// console.log(flatMap(arr));

// 22 Write a function mapMean(arr)
// mapMean(arr) takes in an array of arrays, and returns an array of numbers
// whose element at index i maps to the mean average value of arr[i]

function mapMean(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    const a = arr[i];
    let sum = 0;
    for (let j = 0; j < a.length; j++) {
      sum += a[j];
    }
    result.push(sum / a.length);
  }
  return result;
}

// TEST
// const arr = [
//   [1, 2, 3],
//   [100, 200],
//   [10, 20],
// ];

// mapMean(arr); // [2, 150, 15]
// console.log(mapMean(arr));

// 23. Write a function mapMode(arr)
// mapMode(arr) takes in an array of arrays, and
// returns an array of numbers whose element at index i maps to the statistical mode of arr[i]

function mapMode(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(mode(arr[i]));
  }
  return result;
}

// const arr = [
//   [1, 2, 3, 1],
//   [100, 200],
//   [10, 20],
// ];

// TEST
// mapMode(arr); // [1, null, null]
// console.log(mapMode(arr));

// 24.Write a function mapRevertSign(arr)
// mapRevertSign(arr) takes in an array of numbers, and
// returns a new array of numbers containing opposite signs of the original array.

function mapRevertSign(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      result.push(arr[i]);
    } else {
      result.push(arr[i] * -1);
    }
  }
  return result;
}

// TEST
// const arr = [1, -4, 2, 0];
// mapRevertSign(arr); // [-1, 4, -2, 0]
// console.log(mapRevertSign(arr));

// 25 Write a function reverse(arr)
// reverse(arr) returns a new array which is arr reversed.
// You are not allowed to use Array.reverse method.

function reverse(arr) {
  let rev = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    rev.push(arr[i]);
  }
  return rev;
}

// TEST
// const arr = [1, 2, 3, 4, 5];
// reverse(arr); // [5, 4, 3, 2, 1]

// console.log(reverse(arr));

// 26. Write a function unique(arr)
// unique(arr) takes in an array of numbers arr and returns a new array whose elements are unique.
// You are not allowed to use Set, but using isMember above is allowed.

function unique(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (isMember(arr[i], result) === false) {
      result.push(arr[i]);
    }
  }
  return result;
}

// TEST
// const arr = [10, 20, 10, 20, 30, 50, 60, 100];

// unique(arr); // [10, 20, 30, 50, 60, 100]
// console.log(unique(arr));
// console.log(unique([1, 1, 2, 3, 4, 5, 5, 5, 4, 3, 2, 3, 4, 1]));

// 27. Write a function toBytes(s)
// toBytes(s) takes in a string s and returns an array of ASCII bytes. formed by s
// If a character in s is invalid ASCII, the character is omitted from the returned array.
// Hint: JavaScript strings have method s.charCodeAt(i) which returns the ASCII code of the character
// at index i of string s

function toBytes(s) {
  let result = [];
  for (let i = 0; i < s.length; i++) {
    let check = s.charCodeAt(i);
    if (check < 256) {
      result.push(s.charCodeAt(i));
    }
  }
  return result;
}

// TEST
// const bar = "Bar";
// const foo = "Foo";
// const fooFire = "Foo🔥";

// console.log(toBytes(bar)); // [ 66, 97, 114 ]
// console.log(toBytes(foo)); // [ 70, 111, 111 ]
// console.log(toBytes(fooFire)); // [ 70, 111, 111 ] because the emoji is invalid ASCII

//1byte 8 bit

//28. Write a function transpose(bits, w, h)

function transpose(bits, w, h) {
  let bigA = [];
  let idx = 0;
  for (let i = 0; i < h; i++) {
    smallA = [];
    for (let j = 0; j < w; j++) {
      smallA.push(bits[idx]);
      idx += 1;
    }
    bigA.push(smallA);
  }
  console.log(bigA);
}

// TEST
// const imageBytes = [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1];
// transpose(imageBytes, 8, 2);

//29 transposable(arr, w, h) returns a boolean,
//indicating whether the array arr could be transposed with w and h

function transposable(arr, w, h) {
  let l = arr.length;
  if (l % w === 0 && l % h === 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}
//TEST
// const image = [1, 0, 1, 0, 1, 1];
// transposable(image, 4, 2);
//TEST
// const image = [1, 0, 1, 0, 1, 1]; // len = 6
// transposable(image, 2, 3); // true
// transposable(image, 6, 1); // true
// transposable(image, 4, 2); // false

// 30. Write a function markdownToHTML(md)
// markdownToHTML(md) takes in a Markdown string md and returns a HTML string parsed from md
// You can just parse the header tags (<h1>, <h2>, and so on) and the paragraph tag <p> and
// ignore the rest of Markdown standard.
// Hint: JavaScript strings have method s.startsWith(p) which returns a boolean
// indicating whether s is prefixed with p

function markdownToHTML(md) {
  let sp = md.split("\n").filter((n) => {
    return n !== "";
  });
  let result = [];
  for (let j = 0; j < sp.length; j++) {
    let count = 0;
    let outLoop = sp[j];
    for (let i = 0; i < outLoop.length; i++) {
      if (outLoop.startsWith("#")) {
        if (outLoop[i] === "#") {
          count += 1;
        } else {
          break;
        }
      }
    }
    if (count === 1) {
      result.push("<h1>" + outLoop.slice(2, outLoop.length) + "</h1>");
    } else if (count === 2) {
      result.push("<h2>" + outLoop.slice(3, outLoop.length) + "</h2>)");
    } else if (count === 3) {
      result.push("<h3>" + outLoop.slice(4, outLoop.length) + "</h3>)");
    } else if (count === 4) {
      result.push("<h4>" + outLoop.slice(5, outLoop.length) + "</h4>)");
    } else if (count === 5) {
      result.push("<h5>" + outLoop.slice(6, outLoop.length) + "</h5>)");
    } else if (count === 6) {
      result.push("<h6>" + outLoop.slice(7, outLoop.length) + "</h6>)");
    } else {
      result.push("<p>" + outLoop + "</p>");
    }
  }
  let ans = "";
  for (let i = 0; i < result.length; i++) {
    ans += result[i] + "\n";
  }
  return ans;
}

// TEST
// const m = `
// # This is H1

// ## This is H2

// This is a paragraph
// `;

// markdownToHTML(md);
// <h1>This is H1</h1>
// <h2>This is H2</h2>
// <p>This is a paragraph</p>

// let sp = md.split("\n").filter((n) => {
//   return n !== "";
// });

// console.log(markdownToHTML(m));
