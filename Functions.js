// Functions are used to perform specific task in javascript
// A function can be reusable, it can be used multiple times

// Function Declaration
/*function greet() {
  console.log("Hello World");
}

greet();
greet();
greet();

let greetUser = function () {
  console.log("Hello user");
};

greetUser();
greetUser();
greetUser();
greetUser();*/

//Function parameters & Arguments
function greet(name) {
  console.log("Hello", name);
}

greet("John");
greet("David");
greet("Mario");
greet("Daniel");

let greetUser = function (user) {
  console.log("Hello", user, "how are u doing");
};

greet("Seun");
greet("David");
greet("Taiwo");
greet("Stephen");

function fullName(fName, lName) {
  console.log("Hello", fName, lName);
}

fullName("John", "Doe");

// Create Javascript functions that perform the following task
// addition of two numbers
// subtraction of two numbers
// division of two numbers
// multiplication of two numbers
//  square of a number

// Function that add two numbers
function add(a, b) {
  return a + b;
}

console.log(add(10, 20));
add(155, 209);

// subtraction of two numbers
function subtract(a, b) {
  return a - b;
}

console.log(subtract(20, 5));
subtract(35, 14);

// division of two numbers
function divide(a, b) {
  return a / b;
}
console.log(divide(40, 8));
divide(72, 4);

// multiplication of two numbers
function multiply(a, b) {
  return a * b;
}

console.log(multiply(7, 5));
multiply(2, 10);

// square of a number
function square(a) {
  return a ** 2;
}

console.log(square(2));
square(3);

// return statement

Function;
// Creating a javaScript Function that does this tasks
// Addition of three numbers
function add(a, b, c) {
  console.log(a + b + c);
}
add(10, 10, 20);

// Subtraction of three numbers
function subtract(a, b, c) {
  console.log(a - b - c);
}
subtract(4 - 1 - 1);
subtract(8 - 1 - 2);

// TYPES OF Function
// Basic Function - function add (){}
// Anonymous function - Function (){}
// Arrow function - const add = () => {}

function takeAndReturn(string) {
  console.log("I received", string);
}

takeAndReturn(1);

function setPassword(password) {
  console.log("password is", password);
}

setPassword("sd123");

function turnLight(action) {
  console.log("light turned", action);
}

turnLight("on");
turnLight("off");

function carEngine(action) {
  console.log("car engine", action);
}

// carEngine("start")
carEngine("stop");

function addTwoNumbers(a, b) {
  console.log(a + b);
}
function subtractTwoNumbers(a, b) {
  console.log(a - b);
}
function multiplyTwoNumbers(a, b) {
  console.log(a * b);
}
function divideTwoNumbers(a, b) {
  console.log(a / b);
}

addTwoNumbers(75, 92);
addTwoNumbers(67, 94);
addTwoNumbers(150, 85);

subtractTwoNumbers(75, 92);
subtractTwoNumbers(67, 94);
subtractTwoNumbers(150, 85);

multiplyTwoNumbers(75, 92);
multiplyTwoNumbers(67, 94);
multiplyTwoNumbers(150, 85);

divideTwoNumbers(75, 92);
divideTwoNumbers(67, 94);
divideTwoNumbers(150, 85);

// RECURSION
// This is the process of a function calling itself

function factorial(n) {
  if (n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(7));
console.log(factorial(3));

// create a function that gives the multiplication table for a specific number from 1-12
function multiplyFromOneToTwelve(num) {
  for (let i = 1; i <= 12; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}
multiplyFromOneToTwelve(3);

//




function factorial(n) {
  if (n == 1) {
    return 1;
  }else {
    return n * factorial(n-1);
  }
}
console.log(factorial(8))
console.log(factorial(2))




// create a function that gives the multiplication table for a specific number from 1-12

function multiplyFromOneToTWelv(n){
  for (let a = 1; a <= 12; a++ ){
    console.log(`${n} x ${a} = ${n * a} `);
  }
}
multiplyFromOneToTWelv(7);

