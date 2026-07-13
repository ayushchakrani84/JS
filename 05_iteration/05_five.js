// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const myNewNumbers = myNumbers.map((num) => {
//   return num * 2;
// });

// console.log(myNewNumbers);
const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, curval) {
//   console.log(`acc: ${acc} and curval: ${curval}`);
  
//   return acc + curval;
// }, 0)
const myTotal = myNums.reduce((acc, curval) => acc + curval, 0);
console.log(myTotal);
