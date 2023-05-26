/*const a = ["Bat", "Mr a", "Max", "Mr B"];

a.forEach((sMr, idx) => {
  if (sMr.startsWith("Mr")) {
    console.log(sMr, idx);
  }
});*/

/*const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNum = num.map((even) => {
  return even % 2 === 0;
});

console.log(evenNum);*/

//%3 or 13 === 0

/*const num = [1, 2, 3, 39, 5, 6, 78, 8, 9, 10];
const threeTh = num.filter((numT) => {
  return numT % 3 === 0 || numT % 13 === 0;
});

console.log(threeTh);*/

/*test = [1, 23, 4, 56, 100, 9];

function map(input, func) {
  let thanTen = [];
  input.forEach((t) => {
    thanTen.push(func(t));
  });
  return thanTen;
}
console.log(map(test, moreThanTen));

function moreThanTen(n) {
  return n > 10;
}*/

console.log(
  peopleFac([
    ["art", 26, true],
    ["tiger", 23, false],
    ["build", 30, false],
  ])
);

function personFac(person) {
  return {
    name: person[0],
    age: person[1],
    isCool: person[2],
  };
}

function peopleFac(arr) {
  return arr.map((v) => personFac(v));
}

// const bodin = {
//   name: "bodin",
//   type: "school",
//   student: [{ name: "art" }, { name: "beam" }, { name: "mond" }],
//   teacher: [{ name: "boo" }, { name: "somchai", wife: "boo" }],
// };
