// var fullName = "Dev";
// var isLoggedIn = false;
// var loggedCount = 34;
// console.log(loggedCount);
// // This will print 34
// console.log("loggedCount");
// // This will print loggedCount
// var paymentMode;
// console.log(paymentMode);
// // This will print Undefined
// paymentMode = "Online";
// console.log(paymentMode);
// This will Print Online
let globalLet = "I am a global variable";

function testLetScope() {
  console.log(globalLet); 
//   let globalLet = "I am local to the function";
//   console.log(globalLet); 
}

testLetScope();
// console.log(globalLet); 
