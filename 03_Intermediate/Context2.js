/*
There are majorly two types of context that is executing
1)Global Context.
2)Execution Context.
*/

var num = 2;
function sayMe() {
  console.log("Say Me");
}
sayMe();

/*
Till Line number 9:
Global Context Scans the code and stores the information.
But at Line 10, Execution context kicks in.
*/

/*
Window object is majorly tied with browser.
*/

/*
Stack of Context:
[Execution Context]
[Execution Context]
[Execution Context]
[Execution Context]
[Global Context]
*/

/*
Execution Context
1)Variable Object, 2)Scope Chain , 3) this
Rules:
1)Function declarations are scanned and are made globally availabe.
2)Variable declarations are also scanned and made undefined.
*/

tipper(80);
/*
Here still the tipper function will run because global context has scanned the code and made it available globally
*/
function tipper(a) {
  var bill = parseInt(a);
  console.log(bill + 5);
}
tipper2(75);
/*
Here this will surely give an error because tipper2 is a variable. SinceVariable declarations are scanned and made undefined, this will give us an error.
*/
let tipper2 = function (a) {
  var bill = parseInt(a);
  console.log(bill + 15);
};
console.log(name2);
// This will give undefined and not an error , simply because , global context knows that , there is a variable named name2, it's just defined.
var name2="Dev";

