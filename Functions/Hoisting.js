// Hoisting in JavaScript
// Variable declaration are hosted towards the top of scope in case of var
num = 10;
console.log(num);
var num;
test();
function test() {
  console.log("Hiii Guys!!");
}

// test ();
// let func=()=>{
//     console.log("Hiii Guys!!");
// }
/*
Hoisting is JavaScript's default behavior of moving declarations to the top.
In JavaScript, a variable can be declared after it has been used.
In other words; a variable can be used before it has been declared.
*/
