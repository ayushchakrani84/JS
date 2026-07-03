
// function sayMyName() {
//   console.log("A");
//   console.log("B");
//   console.log("C");
//   console.log("D");
//   console.log("E");
// }

// sayMyName();

// function addTwoNumbers(num1, num2) {
//   console.log(num1 + num2);
// }

// addTwoNumbers(5, 10);


function calculateCartPrice(val1, val2, ...num1){
  return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000)); 

const user = {
  userName: "John",
  price : 199
}

function handleObject(anyObject){
  console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`);
}

handleObject(user);

function returnSecondValue(getArray) {
  return getArray[1]
}
//console.log(returnSecondValue (myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));