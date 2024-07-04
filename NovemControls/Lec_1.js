// let variable block scope
function example1() {
  if (true) {
    let x = 10;
  }
  console.log(x);
}
example1(); // it will give reference error

// var variable functional scope
function example2() {
  if (true) {
    var x = 10;
  }
  console.log(x);
}
example2();

//var functional scope with undefined initialization  at top if accessed before initialization
function example2() {
  console.log(x);
  if (true) {
    var x = 10;
  }
}
example2();

let x = 10;
let y = 5;
console.log(z); //Hoisting:regardless of where functions and variables are declared, they are moved to the top of their execution befofe code execution.
var z = 45;
console.log(s); //reference error
let s = 9;

const a = 2;
a = 7;
console.log(a); //TypeError: Assignment to constant variable.

// scope example of let
let global_let = "global variable";
function temp() {
  console.log(global_let);
  let global_let = "local variable";
  console.log(global_let);
}
temp();

let global_let1 = "global variable";
function temp() {
  console.log(global_let1);
}
temp();

//scope example of var
var global_var = "global variable";
function temp() {
  console.log(global_var);
  var global_var = "local variable";
  console.log(global_var);
}

temp();
console.log(global_var);

//data types
var names = "vish";
console.log(typeof names);
var age = 23;
console.log(typeof age);

let x1 = 4.5;
console.log(typeof x1);
let obj = {
  name: "vishali",
  Ui: "abcdefghi",
};
console.log(typeof obj);

let arr = [4, 5, 6];
console.log(typeof arr);

//Number let integer = 42;
let float = 3.14;
let negative = -100;
let exponential = 2.5e6; // 2.5 * 10^6
let notANumber = NaN; // Result of an invalid number operation
let infinity = Infinity; // Result of a division by zero

//String let singleQuoteString = 'Hello, world!';
let doubleQuoteString = "Hello, world!";
let backtickString = `Hello, world!`;
let concatenatedString = "Hello, " + "world!";
let templateLiteral = `The number is `;

//Boolean let isJavaScriptFun = true;
let isJavaScriptHard = false;

//undefined
let notAssigned;
console.log(notAssigned); // Output: undefined

//null
let emptyValue = null;
console.log(emptyValue); // Output: null

//BigInt
let bigInteger = BigInt(9007199254740991);
let anotherBigInteger = 9007199254740991n; // Using the 'n' notation

//Object
let person = {
  name: "Alice",
  age: 30,
};
console.log(person.name); // Output: Alice
